var express      = require('express');
var path         = require('path');
var favicon      = require('serve-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var mongoose     = require('mongoose');

const appRoutes     = require('./routes/app');
const messageRoutes = require('./routes/messages'); // this has to be before the appRoutes

var app = express();
// connect database to server
mongoose.connect('localhost:27017/node-angular'); // node-angular is the name of the database

// view engine setup
app.set('views', path.join(__dirname, 'views')); // __dirname collects the absolute path to the working directory
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// https://www.udemy.com/angular-2-and-nodejs-the-practical-guide/learn/v4/t/lecture/5867016?start=0
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});
app.use('/message', messageRoutes); // this needs to come before app.use('/', etc ow the / would fire every time
app.use('/', appRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    return res.render('index');
});


module.exports = app;
