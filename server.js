// import express module
 const express = require('express');

const bodyParser = require('body-parser');
const db = require('./models/db');

// router_privée
const userRoute = require('./routes/userRoute');
const personRoute = require('./routes/personRoute');
const adminRoute = require('./routes/adminRoute');
const etudiantRoute = require('./routes/etudiantRoute');
const directorRoute = require('./routes/directorRoute');
const offersRoute = require('./routes/offersRoute');

// create express instance
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/user', userRoute);
app.use('/person', personRoute);
app.use('/api/admin', adminRoute);
app.use('/api/etudiant',etudiantRoute);
app.use('/api/director', directorRoute);
app.use('/api/offers', offersRoute);

// run server at a specific port
 app.listen(3000, function(){
   // print this mission
   console.log('server running at: http://localhost:3000');
 });
