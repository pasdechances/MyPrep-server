const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const historySchema = mongoose.Schema({
  date: { type: String, required: true },
  userId: { type: String, required: true },
  event: { type: String, required: true},
  ip: { type: String, required: true },
  info: {type: Object}
});

historySchema.plugin(uniqueValidator);

module.exports = mongoose.model('History', historySchema);
