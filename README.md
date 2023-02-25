## Example of Knex Migrations

Most of this stolen from this guide: 
https://dev.to/easybuoy/setting-up-a-node-api-with-postgres-and-knex-588f

## Prerequisite Softwares

- Node.JS
- NPM
- Docker Desktop
- pgAdmin (Or any other query analyzer for posgres. Helpful but not required.)

## How to run this example

1. Run `sh runPostgres.sh` to startup the docker container / postgres db server
2. Following the instructions from the guide linked above...
  - Run `knex migrate:latest` to apply the schema changes
  - Run `knex seed:run` to insert any seed data


## Create a migration file (A change script for a version)

1. run `knex migrate:make <your new version number here>`
    - Version number not required but may be a helpful organizational method.

2. A new file will be created in `data/automations` with a datetime stamp and the name you provided for version number

    The contents of that file are  shown below

    ```
    /**
    * @param { import("knex").Knex } knex
    * @returns { Promise<void> }
    */
    exports.up = function(knex) {
    
    };

    /**
    * @param { import("knex").Knex } knex
    * @returns { Promise<void> }
    */
    exports.down = function(knex) {
    
    };

3. Upgrade scripts should be added in the `exports.up` function.
   
5. Downgrade scripts should be added in the `exports.down` function.

6. Scripts are written using the knex framework. Knex schema builder documentation: https://knexjs.org/guide/schema-builder.html

