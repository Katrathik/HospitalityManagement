const mongoose = require('mongoose');
const doctorModel = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name!'],
  },
  email: {
    required: [true, 'Please provide your email!'],
    lowercase: true,
    unique: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  phno: [{ type: Number, length: 10, required: true }],
  Address: [{ type: String, required: true }],
  degree: [{ type: String, required: true }],
});
const Doctor = mongoose.model('Doctor', doctorModel);
module.exports = Doctor;
