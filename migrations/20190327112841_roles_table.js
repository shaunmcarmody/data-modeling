// what new changes we need to make
exports.up = function(knex) {
  return knex.schema.createTable('roles', function(tbl) {
    // primary key, called id and make it auto-increment
    tbl.increments();

    tbl
      .string('name', 128)
      .notNullable()
      .unique();

    // tbl.unique('name');
  });
};

// how to undo the changes made in the up function
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('roles');
};

// npx knex init
// npx knex migrate:make roles_table
// npx knex migrate:latest
// npx knex migrate:rollback
