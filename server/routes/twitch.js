var express = require('express');
var router = express.Router();

const Controller = require('../controllers/twitchController')

router.get('/home', Controller.getHome)

module.exports = router;
