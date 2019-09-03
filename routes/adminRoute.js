const adminController = require('../controllers/adminController');

const router = require('express').Router();

router.post('/', adminController.post);
router.get('/', adminController.get);
router.get('/:id', adminController.get);
router.delete('/:id', adminController.delete)

module.exports = router;
