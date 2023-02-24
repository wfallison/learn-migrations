docker stop postgresDB

docker rm postgresDB

docker pull postgres:14.2-alpine

docker run --name postgresDB \
    -e POSTGRES_PASSWORD="CurlyWhirleyShirley" \
    -e POSTGRES_USER=postgres \
    -p 5432:5432 -d postgres:14.2-alpine
