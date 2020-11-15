const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const groupCtrl = require('../controllers/group');

router.get('/', auth, groupCtrl.getAllGroups);
router.get('/name/:id', auth, groupCtrl.getOneGroupByName);
router.get('/:id', auth, groupCtrl.getOneGroup);

router.post('/', auth, groupCtrl.newGroup);
router.put('/:id', auth, groupCtrl.modifyGroup);
router.delete('/:id', auth, groupCtrl.deleteGroup);

module.exports = router;