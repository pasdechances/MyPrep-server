const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const userCtrl = require('../controllers/user');

router.get('/', userCtrl.getAllUsers);
router.get('/:id', userCtrl.getOneUser);
router.post('/', userCtrl.createUser);
router.put('/:id', userCtrl.modifyUser);
router.delete('/:id', userCtrl.deleteUser);

module.exports = router;