/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex =>
  knex.schema.createTable("todo", tbl => {
    tbl.increments();
    tbl.text("task", 128).notNullable();

    knex.schema.raw(`
      CREATE OR REPLACE VIEW public.test2
      AS
      SELECT todo.id,
        todo.task
        FROM todo;
    `);

  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTableIfExists("todo");