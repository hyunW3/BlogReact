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

var titleRouter = require('./routes/titles');
var contentRouter = require('./routes/content')
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
app.use('/titles', titleRouter);
app.use('/contents',contentRouter);
// db connect
mongoose.connect(db_info.MongoURI,{
	useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log("MongoDB connected... "))
.catch(error => console.log(error))



//RESTful API is not applied (reference is below)
// https://poiemaweb.com/mongoose
// https://donghunee.github.io/study/2019/11/12/mongoose
// https://edu.goorm.io/learn/lecture/557/%ED%95%9C-%EB%88%88%EC%97%90-%EB%81%9D%EB%82%B4%EB%8A%94-node-js/lesson/373420/%EC%98%A8%EB%9D%BC%EC%9D%B8-%EB%A9%94%EB%AA%A8%EC%9E%A5-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EC%BD%94%EB%93%9C
/*

const tmp_data = new contentSchema.contentSchema({
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
*/
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
