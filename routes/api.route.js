const { allAccounts } = require('../controllers/api.controller');

const router = require('express').Router();

router.get('/all-accounts', allAccounts);

module.exports = router;