// import express module
const express = require('express');
var config = require('./config/config');
const db = require('./models/db');
const host = '0.0.0.0';

// create express instance
var app = express();

// set the port number based on the environment variable,
// if it exists. Otherwise, use port 5000
app.set('port', process.env.PORT || 4000);
app.set('SECRET_KEY', 'secret');

app = config(app);

// run server at a specific port
app.listen(app.get('port'), host, function(){
  console.log('Running on http://'+ host + ':%d/ (Press CTRL+C to quit)', app.get('port'));
});
