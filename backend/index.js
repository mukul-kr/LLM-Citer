const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const AICiteSchema = require('./models/AICiteSchema');

require('dotenv').config();
app.use(express.json());
app.use(
  cors({
    origin: [
      'https://llm-citer.vercel.app',
      'https://subtle-salmiakki-3c64f9.netlify.app',
      'https://llm-citer-one.vercel.app',
    ],
  })
  // cors()
);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post('/insert', async (req, res) => {
  const Llm_model_name = req.body.llm_model_name;
  const Date = req.body.date;
  const Exact_content = req.body.exact_content;
  const Reference_converstaion = req.body.reference_converstaion;

  console.log(Llm_model_name, Date, Exact_content, Reference_converstaion);

  const formData = new AICiteSchema({
    llm_model_name: Llm_model_name,
    date: Date,
    exact_content: Exact_content,
    reference_converstaion: Reference_converstaion,
  });

  try {
    await formData.save();
    res.send({
      status: 'success',
      id: formData._id,
    });
    console.log(`Data saved successfully., ${formData._id}}}`);
  } catch (err) {
    console.log(err);
  }
});

app.get('/cites/:id', async (req, res) => {
  const data = await AICiteSchema.findById(req.params.id);
  if (data) {
    res.status(200);
    res.send(data);
  } else {
    res.status(404).send({ message: 'text not found' });
  }
});

const serverStatus = () => {
  return {
    state: 'up',
    dbState: mongoose.STATES[mongoose.connection.readyState],
  };
};

app.get('/', (req, res) => {
  res.send('Hello, LLM_Citer!');
});

app.use(
  '/api/uptime',
  require('express-healthcheck')({
    healthy: serverStatus,
  })
);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Server is running on port 3000.');
});
