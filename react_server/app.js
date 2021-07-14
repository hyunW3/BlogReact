var createError = require('http-errors');
var express = require('express');
const mongoose = require('mongoose')
const db_info = require('./config/mongodb_info.js')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var titleRouter = require('./routes/titles');
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
app.use('/', indexRouter);
app.use('/titles', titleRouter);
// db connect
mongoose.connect(db_info.MongoURI,{
	useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log("MongoDB connected... "))
.catch(error => console.log(error))



const tmp_data = new db_info.Title_DB({
	id : 3,
	title : "정인철 밥먹음",
	date : new Date("<2019-07-14>"),
	thumbs : 3,
});
tmp_data.save()
	.then(() => {
	console.log(tmp_data);
})
	.catch((err) => {
	console.log("Error :" + err)
})

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
