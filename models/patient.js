const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const patientSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  birthdayDate: { type: Date},
  sex: { type: String},
  weight: { type: String},
  enable: { type: String},
  patientType: { type: String},
  message: { type: String},
  address: { type: String},
  town: { type: String},
  postalCode: { type: String},
  country: { type: String},
  mail: { type: String},
  phone: { type: String},
  vitaleCard: { type: String},
  mutual: { type: String},
});

patientSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Patient', patientSchema);