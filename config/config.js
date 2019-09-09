const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../routes');
const path = require('path');
const multer = require('multer');
const upload = multer({dest: path.join(__dirname, '../uploads')});

const errorhandler = require('errorhandler');
const notifier = require('node-notifier');

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

  if(app.get('env')==='development') {
    app.use(errorhandler({log: errorNotification}))
  }

  routes.home(app);
  routes.users(app);
  routes.director(app);
  routes.user(app);
  routes.offers(app);
  return app

};
