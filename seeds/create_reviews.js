var config = require('../knexfile')['development'];
var db = require('knex')(config);

exports.seed = function(knex, Promise) {
  return db('movies').select().then(function (movies) {
    return Promise.join(
      knex('reviews').del(),

      knex('reviews').insert({movie_id: movies[0].id, author: 'David Bowie', rating: 5}),
      knex('reviews').insert({movie_id: movies[0].id, author: 'Aanal Patel', rating: 4}),
      knex('reviews').insert({movie_id: movies[2].id, author: 'Clive Barker', rating: 5})
    );
  })
};
