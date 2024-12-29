const express = require('express');
const passport = require('passport');
const authorize = require('../middlewares/authorize'); // The RBAC middleware
const { register, login } = require('../controllers/authController');

const router = express.Router();

// Register a new user (only superadmin can register admins)
router.post('/register', register);

// Login a user
router.post('/login', login);

// Example protected route (admin and superadmin only)
router.get(
  '/protected',
  passport.authenticate('jwt', { session: false }),
  authorize(['admin', 'superadmin']),
  (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
  }
);

// Example superadmin-only route
router.get(
  '/superadmin-only',
  passport.authenticate('jwt', { session: false }),
  authorize(['superadmin']),
  (req, res) => {
    res.json({ message: 'This route is only accessible to superadmin', user: req.user });
  }
);

module.exports = router;
