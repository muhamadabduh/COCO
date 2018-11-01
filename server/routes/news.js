var express = require('express');
var router = express.Router();
const NewsController = require('../controllers/NewsController')
/* GET users listing. */
router.get('/all-source', NewsController.allSource )

router.get('/', function(req, res){
  res.send('sahjflasfkj')
})

module.exports = router;
