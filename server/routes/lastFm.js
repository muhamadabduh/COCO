const router = require('express').Router()
const Controller = require('../controllers/lastFmController')

router.get('/top-tracks', Controller.getTracks)

module.exports = router