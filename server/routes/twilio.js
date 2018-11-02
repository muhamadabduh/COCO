var express = require('express');
var router = express.Router();
var TwilioController = require('../controllers/twilio')

router.post('/', TwilioController.notifyMe)

module.exports = router