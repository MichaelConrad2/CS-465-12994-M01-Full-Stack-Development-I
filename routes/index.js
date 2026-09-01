var express = require('express');
var router = express.Router();

/* Express shell route. The Travlr mockup is available at /index.html. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
