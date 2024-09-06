const express = require('express');
const { signup } = require('../controllers/authController');
const { login, logout } = require('../controllers/index')
const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);
router.post('/logout', logout);

module.exports = router;