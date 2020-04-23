# api-template

## Requirements
- Docker

## Setup
The first time, you need to build the images
```
docker-compose up --build
```

Then if you just need to start the cluster (api, mysql, elasticsearch):
```
docker-compose up
```

To shutdown the cluster:
```
docker-compose down
```

To remove all images, containers and network:
```
docker-compose down --rmi all -v
```

## Development
Once the cluster up, you can code as usual, `nodemon` will restart the application for you.

## Production
In production mode, docker only run the `api` container and in mode daemon:
```
docker-compose -f docker-compose.prod.yml up --built -d
```
Make sure to update .env.prod

## Test
```
docker-compose exec api npm test
OR
docker-compose exec api npm test -- --watchAll
```
Make sure to update .env.test