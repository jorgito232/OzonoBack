const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const SALT = process.env.SALT

const Schema = mongoose.Schema

const User = new Schema({
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['USER', 'EMPLOYEE', 'ADMIN'],
    default: 'USER'
  }
})

UserSchema.pre('save', function (next) {
  let user = this;
  if (!user.isModified('password')) { return next(); }
  bcrypt.genSalt(SALT, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model('users', User)