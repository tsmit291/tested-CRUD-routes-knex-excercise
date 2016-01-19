## Set Up

```sh
npm install
nodemon
```

## Run Tests

Work through your tests in this order:

1. `test_movies_routes`
1. `test_movies_db`
1. `test_movie_reviews_routes`
1. `test_movie_reviews_db`

Work through tests one at a time by removing the `x` from the next `xit` each time you pass a test. `add, commit, push` after each successfully passing test.

```sh
mocha
```

## Objectives

* Be able to write nested CRUD routes using TDD (Test Driven Development)
* Be able to write RESTful routes
* Be able to write RESTful _nested_ routes
* Be able to use knex with Postgres
* Be able to use knex migrations to create database schemas
* Be able to deploy a CRUD app to Heroku
* Be able to create database schemas on Heroku using migrations
