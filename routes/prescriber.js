const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const prescriberCtrl = require('../controllers/prescriber');

router.get('/', prescriberCtrl.getAllPrescribers);
router.get('/:id', auth, prescriberCtrl.getOnePrescriber);
router.post('/', auth, prescriberCtrl.newPrescriber);
router.put('/:id', auth, prescriberCtrl.modifyPrescriber);
router.delete('/:id', auth, prescriberCtrl.deletePrescriber);

module.exports = router;
