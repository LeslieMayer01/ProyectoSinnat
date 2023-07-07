const express = require('express');
const controller = require('../controllers/guardians-controller');
const validator = require('../middleware/guardians-validator');
const router = express.Router();


router.post('/', validator.validatorParams, validator.validator, controller.addGuardian);
router.put('/:guardianId', validator.validatorParams, validator.validator, controller.updateGuardian);
router.get('/', controller.listGuardians);
router.get('/:guardianId',controller.getGuardian);
router.delete('/:guardianId', controller.deleteGuardian);

module.exports = router;