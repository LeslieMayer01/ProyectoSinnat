const express = require('express');
const acudientesController = require('../controllers/acudientes-controller');
const validatorAcudientes = require('../middleware/acudientes-validator');
const router = express.Router();


router.post('/', validatorAcudientes.validatorParams, validatorAcudientes.validator, acudientesController.acudientes);


module.exports = router; 