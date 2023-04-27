const express = require('express');
const dateController = require('../controllers/estudiantes-controller');
const authToken = require('../middleware/auth-token');
const router = express.Router();


router.get('/', dateController.estudiantes);


module.exports = router; 