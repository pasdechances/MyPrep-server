const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const drugCtrl = require('../controllers/drug');

router.get('/', auth, drugCtrl.getAllDrugs);
router.get('/:id', auth, drugCtrl.getOneDrug);
router.post('/', auth, drugCtrl.newDrug);
router.put('/:id', auth, drugCtrl.modifyDrug);
router.delete('/:id', auth, drugCtrl.deleteDrug);

module.exports = router;