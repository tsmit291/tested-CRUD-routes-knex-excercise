var chai = require('chai');
var chaiHttp = require('chai-http');
var assert = require('assert');
var should = chai.should();
var server = require('../app');
chai.use(chaiHttp);

describe('Movies CRUD Routes', function() {
  it('should GET all movies route', function (done) {
    chai.request(server).get('/movies')
    .end(function (err, res) {
      res.should.have.status(200);
      done();
    });
  });
  xit('should GET new movie route', function (done) {
    chai.request(server).get('/movies/new')
    .end(function (err, res) {
      res.should.have.status(200);
      done();
    });
  });
  xit('should POST to movies route', function (done) {
    chai.request(server).post('/movies')
    .end(function (err, res) {
      res.should.have.status(200);
      done();
    });
  });
  xit('should GET one movie', function (done) {
    chai.request(server).get('/movies/2')
    .end(function (err, res) {
      res.should.have.status(200);
      done();
    });
  });
  xit('should get EDIT movie route', function (done) {
    chai.request(server).get('/movies/2/edit')
    .end(function (err, res) {
      res.should.have.status(200);
      done();
    });
  });
  xit('should POST to movies update route', function (done) {
    chai.request(server).post('/movies/2')
    .end(function (err, res) {
      res.should.have.status(200);
      done();
    });
  });
  xit('should POST to movies delete route', function (done) {
    chai.request(server).post('/movies/2/delete')
    .end(function (err, res) {
      res.should.have.status(200);
      done();
    });
  });
});
