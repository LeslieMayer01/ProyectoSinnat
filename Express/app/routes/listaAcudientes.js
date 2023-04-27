const express = require('express');
const listaAcudientesController = require('../controllers/listaAcudientes-controller');
const validatorlistaAcudientes = require('../middleware/listaAcudientes-validator');
const router = express.Router();


router.get('/', validatorlistaAcudientes.validatorParams, validatorlistaAcudientes.validator, listaAcudientesController.listaAcudientes);


module.exports = router; 