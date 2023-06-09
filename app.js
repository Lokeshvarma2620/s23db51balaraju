var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var kiteRouter = require('./routes/kite');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');

var kite = require("./models/kite");
var resorRouter = require('./routes/resource');

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/kite', kiteRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);
app.use('/models/kite', kite);
app.use('/resource', resorRouter);

// We can seed the collection if needed on server start
async function recreateDB(){
 // Delete everything
 await kite.deleteMany();
 let instance1 = new

 kite({kite_color:"yellow",kite_shape:"vertical",kite_cost:10});

 instance1.save().then( () => {

 console.log('First Object is created');

 }).catch( (e) => { 

 console.log('There was an error', e.message); 

 });
 let instance2 = new

 kite({kite_color:"black",kite_shape:"horizontal",kite_cost:20});

 instance2.save().then( () => {

 console.log('second Object is created');

 }).catch( (e) => { 

 console.log('There was an error', e.message); 

 });
 let instance3 = new

 kite({kite_color:"pink",kite_shape:"horizontal",kite_cost:30});

 instance3.save().then( () => {

 console.log('Third Object is created');

 }).catch( (e) => { 

 console.log('There was an error', e.message); 

 });
}
let reseed = true;
if (reseed) {recreateDB();}





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

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

module.exports = app;
