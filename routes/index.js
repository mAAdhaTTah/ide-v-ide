var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'IDE v IDE: Webstorm Takes on the World!' });
});

module.exports = router;
