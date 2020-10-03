const express = require('express');
const router = express.Router();

const installCtrl = require('../controllers/install');

router.post('/', installCtrl.login);

module.exports = router;