const express = require('express');
const router = express.Router();

const userSignUp = require('../auth/signup');
const userLogin = require('../auth/login');

router.post('/signup', userSignUp.signup);
router.post('/login', userLogin.login);

module.exports = router;