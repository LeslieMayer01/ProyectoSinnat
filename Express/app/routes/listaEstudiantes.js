const express = require('express');
const listaEstudiantesController = require('../controllers/listaEstudiantes-controller');
const validatorListaEstudiantes = require('../middleware/listaEstudiantes-validator');
const authToken = require('../middleware/auth-token');
const router = express.Router();


router.get('/',authToken.njwtAuth, validatorListaEstudiantes.validatorParams, validatorListaEstudiantes.validator, listaEstudiantesController.listaEstudiantes);


module.exports = router; 