const etudiantController = require('../controllers/etudiantController');

const router = require('express').Router();

router.post('/', etudiantController.post);
router.get('/', etudiantController.get);
router.get('/:id', etudiantController.get);
router.delete('/:id', etudiantController.delete)

module.exports = router;
