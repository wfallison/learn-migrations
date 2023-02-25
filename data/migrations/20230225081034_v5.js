// Remove a column from the view for the todo table

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex =>
  knex.schema.raw(`
  DROP VIEW public.test2;
  CREATE OR REPLACE VIEW public.test2
  AS
  SELECT todo.id
    FROM todo;
 `);

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex =>
knex.schema.raw(`
  CREATE OR REPLACE VIEW public.test2
  AS
  SELECT todo.id,
    todo.task
    FROM todo;
`);
