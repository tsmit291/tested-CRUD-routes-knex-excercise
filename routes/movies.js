var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/movies', function(req, res, next) {
  res.render('movies/index');
});

module.exports = router;
