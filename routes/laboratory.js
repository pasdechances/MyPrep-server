const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const laboratoryCtrl = require('../controllers/laboratory');

router.get('/', laboratoryCtrl.getAllLaboratories);
router.get('/:id', auth, laboratoryCtrl.getOneLaboratory);
router.post('/', auth, laboratoryCtrl.newLaboratory);
router.put('/:id', auth, laboratoryCtrl.modifyLaboratory);
router.delete('/:id', auth, laboratoryCtrl.deleteLaboratory);

module.exports = router;
