const express = require('express');
const productosController = require('../controllers/productos-controller');
const validatorProductos = require('../middleware/productos-validator');
const router = express.Router();


router.post('/', validatorProductos.validatorParams, validatorProductos.validator, productosController.productos);


module.exports = router; 