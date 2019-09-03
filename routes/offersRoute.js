const offersController = require('../controllers/offerController');

const router = require('express').Router();

router.post('/', offersController.post);
router.get('/', offersController.get);
router.get('/:id', offersController.get);
router.delete('/:id', offersController.delete)

module.exports = router;
