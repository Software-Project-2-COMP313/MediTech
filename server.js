process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var mongoose = require('./config/mongoose'),
    express = require('./config/express'),
    configurePassport = require('./config/passport');

var db = mongoose();
var app= express();
var passport = configurePassport();

app.listen(3333);

module.exports = app;
console.log('Server running at http://localhost:3333');
