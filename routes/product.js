const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const productCtrl = require('../controllers/product');

router.get('/', productCtrl.getAllProducts);
router.get('/:id', auth, productCtrl.getOneProduct);
router.post('/', auth, productCtrl.newProduct);
router.put('/:id', auth, productCtrl.modifyProduct);
router.delete('/:id', auth, productCtrl.deleteProduct);

module.exports = router;
