var express = require('express');
var router = express.Router();
var {createAcc} =  require('../controllers/userController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/createAcc', createAcc)

module.exports = router;
