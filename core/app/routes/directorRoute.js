const directorController = require('../controllers/directorController');

const router = require('express').Router();

module.exports = function(app) {

  router.post('/api/director/', directorController.post);
  router.get('/api/director/', directorController.get);
  router.get('/api/director/:id', directorController.get);
  router.get('/api/director/:id/token', directorController.token);
  router.delete('/api/director/:id', directorController.delete);
  router.delete('/api/director/', directorController.delete);
  router.put('/api/director/:id', directorController.put);
  router.put('/api/director/:id/add-offer', directorController.addOffer);
  app.use(router);

}
