const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const laboratorySchema = mongoose.Schema({
    certBpf: { type: String},
    certAnalyse: { type: String},
    codeClient: { type: String},
    francoport: { type: String},
    rfa: { type: String},
    url: { type: String},
    discount: { type: String},
    message: { type: String},
    name: { type: String, required: true },
    town: { type: String},
    postalCode: { type: String},
    country: { type: String},
    phone: { type: String},
    mail: { type: String},
    enable: { type: String}
});

laboratorySchema.plugin(uniqueValidator);

module.exports = mongoose.model('Laboratory', laboratorySchema);