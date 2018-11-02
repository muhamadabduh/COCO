var express = require('express');
var router = express.Router();

const Controller = require('../controllers/twitchController')

router.get('/home', Controller.getHome)
router.get('/search/:game', Controller.search)
router.get('/top', Controller.topGame)

module.exports = router;
