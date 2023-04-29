// import { Schema, model } from 'mongoose';
const mongoose = require('mongoose');

const AICiteFormSchema = mongoose.Schema({
    llm_model_name: String,
    date: String,
    exact_content: String,
    reference_converstaion: String
});

const AICiteSchema = mongoose.model('AICiteSchema', AICiteFormSchema);
module.exports =  AICiteSchema ;