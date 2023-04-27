const express = require('express');
const listaProductosController = require('../controllers/listaProductos-controller');
const validatorlistaProductos = require('../middleware/listaProductos-validator');
const router = express.Router();


router.get('/', validatorlistaProductos.validatorParams, validatorlistaProductos.validator, listaProductosController.listaProductos);


module.exports = router; 