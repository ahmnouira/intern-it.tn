const directorController = require('../controllers/directorController');

const router = require('express').Router();

router.post('/', directorController.post);
router.get('/', directorController.get);
router.get('/:id', directorController.get);
router.delete('/:id', directorController.delete)

module.exports = router;
