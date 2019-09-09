const router = require('express').Router();
const fileController = require('../controllers/fileController');
const multer = require('multer');
const upload = multer({ dest:  __dirname +  'uploads/'})

module.exports = function(app) {

  router.post('/api/filename', upload.single('file'), fileController.post);
  router.get('/api/filename/:filename', fileController.get);
  app.use(router);
}
