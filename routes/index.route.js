//controllers
const router = require('express').Router();

const indexController = require('../controllers/index.controller');


router.get('/', indexController.getIndex);
router.post('/subscribe', indexController.postSubscribe);


module.exports = router;