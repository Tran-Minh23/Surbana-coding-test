## Description

This is the backend application built on top of NestJs framework and Postgres database.

## Prerequisites

Install the Docker CLI

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Project structure

Inside the src folder:

- common: store the classes or interface that use in many modules. In this project I only have 1 class for the common response Template for the API
- config: store the classes for configuring the project. They are global exception config, global validation config, typeorm config
- location: the module for handling requests to module entity.
  - dtos: map requests data to actual objects
  - read: the service for processing read query actions (This follows the idea of CQRS pattern)
  - update: the service for processing write query actions
  - response: the template object for data responses

## Technical information

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
