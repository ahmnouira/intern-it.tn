// import express module
const express = require('express');
// import the config.js from config folder
var config = require('./config/config');
// import db.js mongodb configuration from models folder
const db = require('./app/models/db');

// create express instance
var app = express();

// set the 'port' number based on the environment variable, if it exists. Otherwise, use port 4000
app.set('port', process.env.PORT || 4000);
// set the host based on the environment varibale, if it  exists. Otherwise, use '0.0.0.0'
app.set('host', process.env.HOST || '0.0.0.0');
app.set('SECRET_KEY', process.env.SECRET_KEY || 'secret');

app = config(app);

// run server at a specific port
app.listen(app.get('port'), app.get('host'), function(){
  console.log('Running on http://'+ app.get('host') + ':%d/ (Press CTRL+C to quit)', app.get('port'));
});
