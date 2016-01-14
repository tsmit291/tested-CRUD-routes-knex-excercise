var chai = require('chai');
var chaiHttp = require('chai-http');
var assert = require('assert');
var should = chai.should();
var server = require('../app');
var knex = require('../db/knex');

chai.use(chaiHttp);

function Movies() {
  return knex('movies');
}

beforeEach(function() {
  Movies().del();
});

describe('Movies', function() {
  it('should return all movies from /movies GET', function (done) {
    chai.request(server).get('/movies').end(function (err, res) {
      res.should.have.status(200);
      done();
    })
  });
});
