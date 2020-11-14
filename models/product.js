const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const product = mongoose.Schema({
  label: { type: String, required: true },
  principeActive: { type: String, required: true },
  laboratory: { type: Date},
  name: { type: String},
  cip: { type: String},
  barcode: { type: String},
  message: { type: String},
  dosage: { type: String},
  receptionDate: { type: String},
  buyingPrice: { type: String},
  cataloguePrice: { type: String},
  netPrice: { type: String},
  quantity: { type: String},
});

product.plugin(uniqueValidator);

module.exports = mongoose.model('Product', product);