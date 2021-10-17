const express = require('express');
const mongoose = require('mongoose');
const dbInfo = require('./config/mongodb_info.json');

const contentRouter = require('./routes/content');
const categoryRouter = require('./routes/category');

const app = express(); // TODO : asyncify

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// request mapping
app.use('/contents', contentRouter);
app.use('/categories', categoryRouter);

// db connect
mongoose
  .connect(dbInfo.MongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected... '))
  .catch((error) => console.log(error));

module.exports = app;
