const personController = require('../controllers/PersonController');

const router = require('express').Router();

router.post('/create', personController.create);
router.get('/get', personController.get);
router.get('/get/:id', personController.get);
router.delete('/delete/:id', personController.delete)

module.exports = router;
