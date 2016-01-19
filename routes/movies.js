var express = require('express');
var router = express.Router();

/* Movies Routes Go Here. */

router.get('/', function (req, res, next) {
  res.render('movies/index');
});

router.get('/new', function (req, res, next){
  res.render('movies/new');
});

router.post('/', function (req, res, next){
  res.redirect('/');
});

router.get('/:id', function (req, res, next){
  res.render('movies/edit');
});

router.get('/2/edit', function (req, res, next){
  res.render('movies/edit');
});

router.post('/:id', function (req, res, next){
  res.redirect('/movies/edit');
});

router.post('/:id/delete', function (req, res, next){
  res.redirect('/');
});

module.exports = router;
