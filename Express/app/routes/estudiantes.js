const express = require('express');
const estudiantesController = require('../controllers/estudiantes-controller');
const validatorEstudiantes = require('../middleware/estudiantes-validator');
const router = express.Router();


router.post('/', validatorEstudiantes.validatorParams, validatorEstudiantes.validator, estudiantesController.estudiantes);


module.exports = router; 