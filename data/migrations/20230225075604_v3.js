// Remove the description table
// should just be done with a rollback

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex =>
  knex.schema.alterTable('todo', function (table) {
    table.dropColumn('description');
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex =>
  knex.schema.alterTable('todo', function (table) {
    table.string('description');
  });
