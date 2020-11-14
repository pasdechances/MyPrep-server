const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const patientCtrl = require('../controllers/patient');

router.get('/', patientCtrl.getAllPatients);
router.get('/:id', auth, patientCtrl.getOnePatient);
router.post('/', auth, patientCtrl.newPatient);
router.put('/:id', auth, patientCtrl.modifyPatient);
router.delete('/:id', auth, patientCtrl.deletePatient);

module.exports = router;
