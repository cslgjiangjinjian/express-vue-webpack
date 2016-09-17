var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/app', function(req, res, next) {
  res.render('app', { title: 'Express' });
});
router.get('/list', function(req, res, next) {
  res.render('list', { title: 'Express' });
});
module.exports = router;
