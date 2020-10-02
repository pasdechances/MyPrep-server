const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.post('/configServeur', userCtrl.login);

module.exports = router;