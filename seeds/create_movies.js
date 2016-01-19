exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('movies').del(),

    knex('movies').insert({
      director: 'You',
      title: 'The Great Beyond'
    }),
    knex('movies').insert({
      director: 'Martha Berner',
      title: 'Adventures in CRUD'
    }),
    knex('movies').insert({
        director: 'Nmuta Jones',
        title: 'Spiral Like A Boss'
      })
  );
};
