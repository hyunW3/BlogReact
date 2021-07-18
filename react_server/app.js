var createError = require('http-errors');
var express = require('express');
// 현재 매번 mongoDB atlas 에서 network access바꾸는중
const mongoose = require('mongoose');
const db_info = require('./config/mongodb_info.js');
const contents = require('./schemas/contents')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var contentSchema = require('./schemas/contents')

var contentRouter = require('./routes/content');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, '../react-client/build'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../react-client/build')));

//request mapping
app.use('/contents',contentRouter);
// db connect
mongoose.connect(db_info.MongoURI,{
	useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log("MongoDB connected... "))
.catch(error => console.log(error))



//RESTful API is not applied (reference is below)
// https://poiemaweb.com/mongoose
// https://donghunee.github.io/study/2019/11/12/mongoose

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
