var express = require('express');
const { createbird } = require('../controller/creatbird');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/birds/create', function (req, res, next) {
  res.render('creatbird');
});
router.post('/birds/create', function (req, res, next) {
  createbird(req,res)
  
});
module.exports = router;
