require('dotenv').config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DBHOST,
      database: process.env.DBNAME,
      user:     process.env.DBUSER,
      password: process.env.DBPASS
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },
  testing: {
    client: 'pg',
    connection: {
      database: process.env.DBNAME,
      user:     process.env.DBUSER,
      password: process.env.DBPASS
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },
  production: {
    client: 'pg',
    connection: {
      database: process.env.DBNAME,
      user:     process.env.DBUSER,
      password: process.env.DBPASS
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  }

};
