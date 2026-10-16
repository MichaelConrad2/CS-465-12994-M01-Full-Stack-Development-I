const jwt = require('jsonwebtoken');

function requireAuth(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header required' });
  }

  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer' || !parts[1]) {
    return res.status(401).json({ message: 'Authorization header must be: Bearer <token>' });
  }

  jwt.verify(
    parts[1],
    process.env.JWT_SECRET,
    { algorithms: ['HS256'] },
    (err, verified) => {
      if (err) {
        return res.status(401).json({ message: 'Token validation error: ' + err.message });
      }
      req.auth = verified;
      next();
    }
  );
}

module.exports = { requireAuth };