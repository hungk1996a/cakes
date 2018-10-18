
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cakes', function (table) {
     table.increments('id');
     table.string('name');
     table.string('publisher');
     table.integer('amount');
     table.float('price')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cakes');
};
