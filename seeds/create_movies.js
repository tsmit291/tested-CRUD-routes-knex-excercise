
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('movies').del(),

    // Inserts seed entries
    knex('movies').insert({
      id: 1,
      director: 'You',
      title: 'The Great Beyond'
    }),
    knex('movies').insert({
      id: 2,
      director: 'Martha Berner',
      title: 'Adventures in CRUD'
    }),
    knex('movies').insert({
        id: 3,
        director: 'Nmuta Jones',
        title: 'Spiral Like A Boss'
      })
  );
};
