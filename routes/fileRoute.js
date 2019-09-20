const router = require('express').Router();
const fileController = require('../controllers/fileController');
const multer = require('multer');
const upload = multer({ dest:  __dirname +  'uploads/'})

module.exports = function(app) {

  router.post('/api/file', upload.single('file'), fileController.post);
  router.get('/api/file/:filename', fileController.get);
  router.delete('/api/file/:filename', fileController.delete);
  router.delete('/api/file/', fileController.delete);
  app.use(router);
}
