// Add a description field to the todo table

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex =>
  knex.schema.alterTable('todo', function (table) {
    table.string('description');
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex =>
  knex.schema.alterTable('todo', function (table) {
    table.dropColumn('description');
  });
