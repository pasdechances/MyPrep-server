const express = require('express');
const router = express.Router();

const installCtrl = require('../controllers/install');

router.post('/', installCtrl.install);
router.get('/', installCtrl.checkInstall);

module.exports = router;