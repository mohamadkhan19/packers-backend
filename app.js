var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var userRoutes = require('./routes/user');
var formRoutes = require('./routes/form');
var sensor_dataRoutes = require('./routes/sensor_data');
var led_dataRoutes = require('./routes/led_data');


var app = express();
mongoose.connect('mongodb://root:toor@ds157819.mlab.com:57819/restapi_deployement');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/users', userRoutes);
app.use('/form', formRoutes);
app.use('/sensor_data', sensor_dataRoutes);
app.use('/led_data', led_dataRoutes);


module.exports = app;
