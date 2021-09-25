const createError = require('http-errors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dbInfo = require('./config/mongodb_info.js');

const contentRouter = require('./routes/content');

const app = express(); // TODO : asyncify

// view engine setup
app.set('views', path.join(__dirname, '../react-client/build'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../react-client/build')));

// request mapping
app.use('/contents', contentRouter);
// db connect
mongoose.connect(dbInfo.MongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected... '))
  .catch((error) => console.log(error));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
