const express = require('express');
const router = express.Router();

const install = require('../middleware/install');
const userCtrl = require('../controllers/user');

router.post('/', install, userCtrl.login);
router.delete('/:id', install, userCtrl.disconnect);

module.exports = router;