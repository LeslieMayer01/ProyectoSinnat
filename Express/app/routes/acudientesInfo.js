const express = require('express');
const infoController = require('../controllers/info-controller');
const router = express.Router();


router.get('/',infoController.acudientes);


module.exports = router; 