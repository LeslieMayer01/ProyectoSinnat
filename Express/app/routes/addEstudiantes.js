const express = require('express');
const addEstudiantesController = require('../controllers/addEstudiantes-controller');
const validatorAddEstudiantes = require('../middleware/addEstudiantes-validator');
const authToken = require('../middleware/auth-token');
const router = express.Router();


router.post('/',  validatorAddEstudiantes.validatorParams, validatorAddEstudiantes.validator, addEstudiantesController.addEstudiantes);


module.exports = router; 