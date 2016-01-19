
exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('reviews').del(),

    knex('reviews').insert({id: 1, movie_id: 1, author: 'David Bowie', rating: 5}),
    knex('reviews').insert({id: 1, movie_id: 1, author: 'Aanal Patel', rating: 4}),
    knex('reviews').insert({id: 2, movie_id: 3, author: 'Clive Barker', rating: 5})
  );
};
