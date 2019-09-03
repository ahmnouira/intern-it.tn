const userController = require('../controllers/UserController');

const router = require('express').Router();


router.post('/create', userController.create);
router.get('/get', userController.get);
router.get('/get/:id', userController.get);


module.exports = router;
