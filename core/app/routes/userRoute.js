// user are generally students

const userController = require('../controllers/userController');

const router = require('express').Router();

module.exports = function(app) {

  router.post('/api/user/', userController.post);
  router.get('/api/user/', userController.get);
  router.get('/api/user/:id', userController.get);
  router.get('/api/user/:id/token', userController.token)
  router.delete('/api/user/:id', userController.delete);
  router.delete('/api/user/', userController.delete);
  router.put('/api/user/:id', userController.put);
  app.use(router);

}
