// import express module
 const express = require('express');

const bodyParser = require('body-parser');

// router_privée
const userRoute = require('./routes/userRoute');
const personRoute = require('./routes/personRoute')

const db = require('./models/db');

// create express instance
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use('/user', userRoute)
app.use('/person', personRoute)

// run server at a specific port
 app.listen(3000, function(){
   // print this mission
   console.log('server running at: http://localhost:3000');
 });
