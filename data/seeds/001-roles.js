exports.seed = knex => (
  knex('roles').insert([
    { name: 'TA' },
    { name: 'Student' },
    { name: 'Staff' },
  ])
);