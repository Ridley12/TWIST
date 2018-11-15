var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to TWIST' });
});

// About page route.
router.get('/about', function (req, res) {
  res.render('About TWIST');
})

module.exports = router;