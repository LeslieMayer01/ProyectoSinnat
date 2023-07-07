const express = require('express');
const controller = require('../controllers/products-controller');
const validator = require('../middleware/products-validator');
const router = express.Router();

router.post('/', validator.validatorParams, validator.validator, controller.addProduct);
router.put('/:productId', validator.validatorParams, validator.validator, controller.updateProduct);
router.get('/', controller.listProducts);
router.get('/:productId',controller.getProduct);
router.delete('/:productId', controller.deleteProduct);

module.exports = router;