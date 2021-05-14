var express = require('express');
var router = express.Router();
const searchController = require('../controllers/search.controller')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list', searchController.list)

router.get('/search', searchController.create)

module.exports = router;
