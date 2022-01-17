## Server Planner

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Docker

To run with Docker:

```bash
# build image
$ docker build --tag hoshitech .

# run
$ docker run -d -p 3000:3000 hoshitech
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
