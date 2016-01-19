var chai = require('chai');
var chaiHttp = require('chai-http');
var assert = require('assert');
var should = chai.should();
var server = require('../app');
chai.use(chaiHttp);

describe('Reviews CRUD Routes', function() {
  xit('should GET all reviews for a movie route', function (done) {
    chai.request(server).get('/movies/1/reviews')
    .end(function (err, res) {
      res.should.have.status(200);
      done();
    });
  });
  xit('should GET new movie review route', function (done) {
    chai.request(server).get('/movies/2/reviews/new')
    .end(function (err, res) {
      res.should.have.status(200);
      done();
    });
  });
  xit('should POST to movie reviews route', function (done) {
    chai.request(server).post('/movies/3/reviews')
    .end(function (err, res) {
      res.should.have.status(200);
      done();
    });
  });
  xit('should GET one movie review', function (done) {
    chai.request(server).get('/movies/2/reviews/1')
    .end(function (err, res) {
      res.should.have.status(200);
      done();
    });
  });
  xit('should get EDIT movie review route', function (done) {
    chai.request(server).get('/movies/2/reviews/1/edit')
    .end(function (err, res) {
      res.should.have.status(200);
      done();
    });
  });
  xit('should POST to movie review update route', function (done) {
    chai.request(server).post('/movies/2/reviews/2')
    .end(function (err, res) {
      res.should.have.status(200);
      done();
    });
  });
  xit('should POST to movie review delete route', function (done) {
    chai.request(server).post('/movies/2/reviews/1/delete')
    .end(function (err, res) {
      res.should.have.status(200);
      done();
    });
  });
});
