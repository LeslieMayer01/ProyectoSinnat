const express = require('express');
const controller = require('../controllers/administrators-controller');
const validator = require('../middleware/administrator-validator');
const router = express.Router();


router.post('/', validator.validatorParams, validator.validator, controller.addAdministrator);
router.put('/:administratorId', validator.validatorParams, validator.validator, controller.updateAdministrator);
router.get('/', controller.listAdministrators);
router.get('/:administratorId',controller.getAdministrator);
router.delete('/:administratorId', controller.deleteAdministrator);

module.exports = router;