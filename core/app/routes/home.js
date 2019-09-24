const home = require('../controllers/home');
const router = require('express').Router();

module.exports = function(app) {
  router.get('/', home.index);

  router.post('/login/', home.login);
  router.get('/login/', home.login);
  router.get('/auth', home.auth);
  router.post('/auth', home.auth);

  app.use(router);
}
