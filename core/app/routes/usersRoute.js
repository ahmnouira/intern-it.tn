// users: all users

const usersController = require('../controllers/usersController');

const router = require('express').Router();

module.exports = function(app) {


  router.get('/api/users/', usersController.get);
  router.get('/api/users/:id', usersController.get);
  router.get('/api/users/:id/token', usersController.token);
  router.delete('/api/users/:id', usersController.delete);
  router.delete('/api/users/', usersController.delete); //delete all users
  app.use(router);

}
