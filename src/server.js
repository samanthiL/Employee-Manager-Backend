require('dotenv').config();
const app = require('./app');
const express = require('express');
const mongoose = require('mongoose');
app.use(express.json());

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

console.log('PORT => ', PORT)
console.log('MONGO URI => ', MONGO_URI)

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });