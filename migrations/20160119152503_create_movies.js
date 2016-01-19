exports.up = function(knex, Promise) {
  return knex.schema.createTable('create_movies', function(table){
    table.increments();
    table.string('director');
    table.string('title');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('create_movies');
};
