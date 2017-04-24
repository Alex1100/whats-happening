var http = require('http');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var routes = require('./config/routes');
var dotenv = require('dotenv');

require('dotenv').config();
require('dotenv').load();

var app = express();

app.use(session({
 secret: 'delectico',
 resave: false,
 saveUninitialized: true
}));

app.set('views', path.join(__dirname, 'client/index.html'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client')));
app.use('/', routes);
app.listen(8080, console.log('listening on port ' + 8080));






module.exports = app;
