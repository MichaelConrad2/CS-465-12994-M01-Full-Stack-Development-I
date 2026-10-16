const passport = require('passport');
const User = require('../models/user');

const register = async (req, res) => {
  const { name, email, password, setupKey } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields required' });
  }

  if (process.env.ADMIN_SETUP_KEY && setupKey !== process.env.ADMIN_SETUP_KEY) {
    return res.status(403).json({ message: 'Valid setup key required to register' });
  }

  try {
    const user = new User();
    user.name = name;
    user.email = email;
    user.setPassword(password);
    await user.save();
    return res.status(200).json({ token: user.generateJWT() });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ message: 'That email is already registered' });
    }
    console.error(err);
    return res.status(400).json({ message: 'Unable to register user' });
  }
};

const login = (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: 'All fields required' });
  }

  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Login failed' });
    }
    if (user) {
      return res.status(200).json({ token: user.generateJWT() });
    }
    return res.status(401).json(info);
  })(req, res);
};

module.exports = { register, login };