const mongoose = require('mongoose');
const validator = require('validator');
function caps(word) {
  return `${word[0].toUpperCase()}${word.substring(1)}`;
}
const userSchema = new mongoose.Schema(
  {
    fName: String,
    lName: String,
    email: {
      type: 'string',
      trim: true,
      unique: true,
      required: ['true', 'PLease enter you name'],
      validate: [validator.isEmail, 'Please provide  a valid email'],
    },
    phoneNumber: {
      type: 'Number',
      required: [true, 'Please provide a valid phone number'],
      maxlength: 10,
      minlength: 10,
    },
    password: {
      type: 'string',
      required: [true, 'Please enter you password'],
      minlength: 8,
      select: false,
    },
    photo: String,
    passwordChangedAt: { type: Date, default: Date.now() },
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: { type: Boolean, default: true, select: false },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

userSchema.virtual('name').get(function () {
  return `${caps(this.fName)} ${caps(this.lName)}`;
});

const User = mongoose.model('User', userSchema);
module.exports = User;
