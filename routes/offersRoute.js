const offersController = require('../controllers/offerController');

const router = require('express').Router();

module.exports = function(app) {

  router.post('/api/offers/', offersController.post);
  router.get('/api/offers/', offersController.get);
  router.get('/api/offers/:id', offersController.get);
  router.delete('/api/offers/:id', offersController.delete);
  router.delete('/api/offers', offersController.delete);
  //router.put('/api/offers/:id' ,offersController.put);
  router.put('/api/offers/:id/add-candidate', offersController.addCandidate);
  app.use(router);

}
