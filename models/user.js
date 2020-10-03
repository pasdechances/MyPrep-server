const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  login: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  groups: {type: Object},
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);