const express = require('express');
const controller = require('../controllers/students-controller');
const validator = require('../middleware/students-validator');

const router = express.Router();

router.post('/', validator.validatorParams, validator.validator, controller.addStudent);
router.put('/:studentId', validator.validatorParams, validator.validator, controller.updateStudent);
router.get('/', controller.listStudents);
router.get('/:studentId',controller.getStudent);
router.delete('/:studentId', controller.deleteStudent);

module.exports = router;