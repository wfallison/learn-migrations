// Create a view against the todo table

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex =>
  knex.schema.raw(`
  CREATE OR REPLACE VIEW public.test2
  AS
  SELECT todo.id,
     todo.task
    FROM todo;
 `);

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex =>
knex.schema.raw(`DROP VIEW public.test2;`)
