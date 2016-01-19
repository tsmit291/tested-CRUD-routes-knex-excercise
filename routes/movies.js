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

/* Test Movie DB Routes Go Here */

router.get('/', function (req, res, next){
  var allRows;
  var tabley = knex.select().table('movies').then(function(rows){
    allRows = rows;
  });
  res.render('movies/index', {rows: allRows})
});

/*Test_Movie_Reviews Routes go here */
router.get('/:movie_id/reviews', function (req, res, next){
  res.render('movies/reviews/show');
});

router.get('/:movie_id/reviews/new', function (req, res, next){
  res.render('movies/reviews/new');
});

router.post('/:movie_id/reviews', function (req, res, next){
  res.redirect('/movies/new');
});

router.get('/:movie_id/reviews/:id', function (req, res, next){
  res.render('movies/reviews/new');
});

router.get('/:movie_id/reviews/:id/edit', function (req, res, next){
  res.render('movies/reviews/edit');
});

router.post('/:movie_id/reviews/:id', function (req, res, next){
  res.redirect('/');
});

router.post('/:movie_id/reviews/:id/delete', function (req, res, next){
  res.redirect('/');
});

/*Test_Movie_Reviews_DB Routes Go Here */


module.exports = router;
