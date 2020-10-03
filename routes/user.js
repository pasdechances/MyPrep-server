const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const userCtrl = require('../controllers/user');

router.get('/', auth, userCtrl.getAllUsers);
router.get('/:id', auth, userCtrl.getOneUser);
router.post('/',  userCtrl.newUser);
router.put('/:id', auth, userCtrl.modifyUser);
router.delete('/:id', auth, userCtrl.deleteUser);

module.exports = router;