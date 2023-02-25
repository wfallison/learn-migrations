//Create a table todo with an Id, and a text column


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex =>
  knex.schema.createTable("todo", tbl => {
    tbl.increments();
    tbl.text("task", 128).notNullable();
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTableIfExists("todo");