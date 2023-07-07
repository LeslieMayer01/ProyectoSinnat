const express = require('express');
const controller = require('../controllers/login-controller');
const validator = require('../middleware/login-validator');
const router = express.Router();


router.post('/',  validator.validatorParams, validator.validator, controller.login);

module.exports = router; 