const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const AICiteSchema = require('./models/AICiteSchema')

// import express from "express";
// import { connect, save } from "mongoose";
// const cors = require('cors');
// const app = express();
// import { AICiteSchema } from "./models/AICiteSchema.js";

require("dotenv").config();
app.use(express.json());
app.use(cors());

mongoose.connect(
    process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);


app.post('/insert', async (req, res) => {
    const Llm_model_name = req.body.llm_model_name
    const Date = req.body.date
    const Exact_content = req.body.exact_content
    const Reference_converstaion = req.body.reference_converstaion

    console.log(Llm_model_name, Date, Exact_content, Reference_converstaion)

    const formData = new AICiteSchema({
        llm_model_name: Llm_model_name,
        date: Date,
        exact_content: Exact_content,
        reference_converstaion: Reference_converstaion
    })

    try {
        await formData.save();
        res.send({
            status: "success",
            id: formData._id
        });
        console.log(`Data saved successfully., ${formData._id}}}`)
    } catch (err) {
        console.log(err)
    }
});

app.get('/read', async (req, res) => {
    id = req.query.id
    console.log(id)
    try {
        const formData = await AICiteSchema.findById(id);
        res.send({
            status: 200,
            data: formData
        });
    }
    catch (err) {
        // console.log(err)
        res.send({
            status: 404,
            data: {}
        });
    }
});


app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});
