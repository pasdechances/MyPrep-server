const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const drugSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  barcode: { type: String, required: true },
  refund: { type: String, required: true },
  labo: { type: String, required: true },
});

drugSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Drug', drugSchema);