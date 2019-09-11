const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../routes');
const path = require('path');
const multer = require('multer');
const upload = multer({dest: path.join(__dirname, '../uploads')});
const errorhandler = require('errorhandler');
const notifier = require('node-notifier');
const morgan = require('morgan');

function errorNotification(err, str, req) {
  var title = "Error in " + req.method + " " + req.url
  notifier.notifiy({
    title: title,
    message: str
  });
}

module.exports = function(app) {

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));
  // parse application/json
  app.use(bodyParser.json());
  app.use(upload.single('file')); // // 'file' must be the same as <form name="file"> in Views

  app.use(morgan('dev'));


  if(app.get('env')==='development') {
    app.use(errorhandler({log: errorNotification}))
  }

  routes.home(app);
  routes.users(app);
  routes.director(app);
  routes.user(app);
  routes.offers(app);

  // express doesn't consider not found 404 as an error so we need to handle 404 explicitly
  // handle 404 error
  app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  app.use(function(req, res, next){
    var err = new Error('Something looks wrong :( !!!');
    err.status = 500;
    next(err);
  });

  app.use(function(req, res, next){
    var err = new Error('Response OK ');
    err.status = 200;
    next(err);
  });

  // handle errors
  app.use(function (err, req, res, next) {
    //console.log(err);

    if (err.status === 404)
      res.status(404).json({message: "Not found"});
    else if (err.status === 500)
      res.status(500).json({message: "Something looks wrong :( !!!"});
    else if  (err.status === 200 )
      res.status(200).json({message: "Response OK "})
  });

  return app

};
