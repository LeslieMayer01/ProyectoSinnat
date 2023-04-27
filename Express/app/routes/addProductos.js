const express = require('express');
const addProductosController = require('../controllers/addProductos-controller');
const validatorAddProductos = require('../middleware/addProductos-validator');
const router = express.Router();


router.post('/', validatorAddProductos.validatorParams, validatorAddProductos.validator, addProductosController.addProductos);


module.exports = router; 