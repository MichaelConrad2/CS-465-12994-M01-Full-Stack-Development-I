const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const ITERATIONS = 210000;
const KEY_LENGTH = 64;
const DIGEST = 'sha512';

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true, lowercase: true, trim: true },
  name: { type: String, required: true, trim: true },
  hash: String,
  salt: String
});

userSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, ITERATIONS, KEY_LENGTH, DIGEST)
    .toString('hex');
};

userSchema.methods.validPassword = function (password) {
  if (!this.salt || !this.hash) return false;
  const hash = crypto.pbkdf2Sync(password, this.salt, ITERATIONS, KEY_LENGTH, DIGEST);
  const stored = Buffer.from(this.hash, 'hex');
  return stored.length === hash.length && crypto.timingSafeEqual(stored, hash);
};

userSchema.methods.generateJWT = function () {
  return jwt.sign(
    { _id: this._id, email: this.email, name: this.name },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
};

const User = mongoose.model('users', userSchema);
module.exports = User;