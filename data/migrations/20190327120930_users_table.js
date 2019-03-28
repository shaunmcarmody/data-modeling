// what new changes we need to make
exports.up = function(knex) {
  return knex.schema.createTable('users', function(tbl) {
    // primary key, called id and make it auto-increment
    tbl.increments();

    tbl
      .string('name', 128)
      .notNullable()
      .unique();

    // foreign key
    tbl
      .integer('role_id') // the column name in this table (users)
      .unsigned()
      .references('id') // primary key in the related (parent) table (roles)
      .inTable('roles')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    // tbl.unique('name');
  });
};

// how to undo the changes made in the up function
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};

// npx knex init
// npx knex migrate:make roles_table
// npx knex migrate:latest
// npx knex migrate:rollback
