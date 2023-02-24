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
