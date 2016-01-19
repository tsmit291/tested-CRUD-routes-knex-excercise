var chai = require('chai');
var assert = require('assert');
var should = chai.should();
var knex = require('../db/knex');

function Movies() {
  return knex('movies');
}

var theMovie = {
  director: 'Jeff Dean',
  title: 'What Would Jeff Dean Do?',
}

describe('Movies CRUD Routes', function() {
  beforeEach(function () {
    return knex.seed.run(knex.config);
  });

  xit('should get all movies from the Movies db', function () {
    return Movies().select().then(function (movies) {
      movies.should.have.length(3);
    });
  });
  xit('should create a movie', function () {
    return Movies().insert(theMovie).then(function (results) {
      return Movies().select().then(function (movies) {
        movies.should.have.length(4);
      })
    })
  });
  xit('should find a movie', function () {
    return Movies().where('id', 2).first().then(function (movie) {
      assert.equal(movie.title, 'Adventures in CRUD');
      assert.equal(movie.director, 'Martha Berner');
    })
  });
  xit('should update a movie', function () {
    return Movies().where('id', 1).first().update({
      director: 'Willy Wonka',
      title: 'The Great Big Bubble Gum'
    }).then(function (id) {
      return Movies().where('id', id).first().then(function (movie) {
        assert.equal(movie.director, 'Willy Wonka');
        assert.equal(movie.title, 'The Great Big Bubble Gum');
      })
    })
  });
  xit('should delete a movie', function () {
    return Movies().where('id', 1).first().del().then(function (results) {
      return Movies().select().then(function (movies) {
        movies.should.have.length(2);
      })
    })
  });

});
