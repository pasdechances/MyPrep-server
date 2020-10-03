const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const groupSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  rights: {
    userEditable: { type: Boolean, required: true },
    groupEditable: { type: Boolean, required: true },
    priceEditable: { type: Boolean, required: true },
    stockUsable: { type: Boolean, required: true },
    saleUsable: { type: Boolean, required: true },
    paramUsable: { type: Boolean, required: true },
    teletransmissionUsable: { type: Boolean, required: true },
    vaccinationAllow: { type: Boolean, required: true },
  }  
});

groupSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Group', groupSchema);