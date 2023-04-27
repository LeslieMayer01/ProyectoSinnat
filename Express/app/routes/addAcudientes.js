const express = require('express');
const addAcudientesController = require('../controllers/addAcudientes-controller');
const validatorAddAcudientes = require('../middleware/addAcudientes-validator');
const authToken = require('../middleware/auth-token');
const router = express.Router();


router.post('/',  validatorAddAcudientes.validatorParams, validatorAddAcudientes.validator, addAcudientesController.addAcudientes);


module.exports = router; 