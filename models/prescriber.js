const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const prescriber = mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  title: { type: Date},
  speciality: { type: String},
  enable: { type: String},
  finessNumber: { type: String},
  message: { type: String},
  address: { type: String},
  town: { type: String},
  postalCode: { type: String},
  country: { type: String},
  mail: { type: String},
  phone: { type: String},
});

prescriber.plugin(uniqueValidator);

module.exports = mongoose.model('Prescriber', prescriber);