// Does seed data need to be versioned?
// Most likely, due to schema changes
// checkout in what order seed files are applied?


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todo').del()
    .then(function () {
      // Inserts seed entries
      return knex('todo').insert([
        {id: 1, task: 'Create API'},
        {id: 2, task: 'Watch Money Heist'},
        {id: 3, task: 'Do Dishex'},
        {id: 4, task: 'Do Dishex'},
        {id: 5, task: 'Do Dishex'},
      ]);
    });
};
