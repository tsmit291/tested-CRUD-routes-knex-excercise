
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', function (t) {
    t.increments();
    t.string('author');
    t.integer('rating');
    t.integer('movie_id');
    t.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews');
};
