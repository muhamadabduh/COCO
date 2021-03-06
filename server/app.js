var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');


require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const fileMongo = "mongodb://localhost:27017/CocoWeb"
const db = mongoose.connection
mongoose.connect(fileMongo, {useNewUrlParser: true})
// const port = process.env.PORT || 3000

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var signinRouter = require('./routes/signIn');
var lastfmRouter = require('./routes/lastFm');
var newsRouter = require('./routes/news');
var twitchRouter = require('./routes/twitch')
var notifyRouter = require('./routes/twilio')

var app = express();
require('dotenv').config()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);

app.use('/users', usersRouter);
app.use('/gsignin', signinRouter)
app.use('/last-fm', lastfmRouter)
app.use('/news', newsRouter);
app.use('/twitch', twitchRouter)
// app.use('/notify', (req,res)=>{
//   console.log(req.body)
// })
app.use('/notify', notifyRouter)

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


// app.listen(port, (req,res) => {
//   console.log(`Server is running on port: ${port} `);
// })

module.exports = app;
