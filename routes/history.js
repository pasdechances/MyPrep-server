const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const historyCtrl = require('../controllers/history');

router.get('/', historyCtrl.getAllHistory);
router.get('/:id', auth, historyCtrl.getOneHistory);
router.post('/', auth, historyCtrl.newHistory);


module.exports = router;