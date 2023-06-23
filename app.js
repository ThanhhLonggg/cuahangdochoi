var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
//mongoose
var mongoose = require('mongoose');
var uri = "mongodb+srv://longntgch210780:9bYhP7PCgWH1XnjT@webasm.b5evy3p.mongodb.net/GCH210780";
mongoose.connect(uri)
.then(() => console.log ("Connect to DB succeed !"))
.catch((err) => console.log (err));

//boydy-parer
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

//router toy
var toyRouter = require('./routes/toy');
app.use('/toy', toyRouter);

//router feedback
var feedbackRouter = require('./routes/feedback');
app.use('/feedback',feedbackRouter);

//router car
var carRouter = require('./routes/car');
app.use('/car',carRouter);

  // view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
var port = process.env.PORT || 5000;
app.listen(port);


module.exports = app;
