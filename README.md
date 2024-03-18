## Description

This is the backend application built on top of NestJs framework and Postgres database.

## Prerequisites

Install node version >= 18

Install the Docker CLI. This is for running the postgres db as a container (I want to run the whole application in containers but my computer is acting weird with node container)

I use port 5432 for my container as default. If that port is not available on your machine, please go to the docker-compose.yaml file and edit the port. IMPORTANT: do not forget to update the port in the .env file in root folder

## Running the app

Navigate to the root folder

```bash
# run Postgres container
$ docker compose up

# install all the packages
$ npm install

# build the project
$ npm run build

# run the migration scripts
$ npm run migration:runts

# start the project
$ npm run start:dev
```

## Project structure

In the root folder:

- Location Diagram: the diagram for database design
- pg-Dockerfile: the docker file for running db
- nest_Dockerfile: the docker file for running the NestJs project
- .env: the file for storing credentials like db user/password (I don't ignore it on purpose)

Inside the src folder:

- common: store the classes or interface that use in many modules. In this project I only have 1 class for the common response Template for the API
- config: store the classes for configuring the project. They are global exception config, global validation config, typeorm config
- location: the module for handling requests to module entity.
  - dtos: map requests data to actual objects
  - read: the service for processing read query actions (This follows the idea of CQRS pattern)
  - update: the service for processing write query actions
  - response: the template object for data responses

## Technical information

- The Postgres database is supporting the address location tree by enable ltree extension data structure. I have included the sample data in the migration scripts, you can check the data after running the migrations. For more [https://www.postgresql.org/docs/current/ltree.html](information) about ltree
- This application is built on [https://docs.nestjs.com/](NestJs) framework + TypeScript
- The app is using class-validator package for validating data in DTO classes. Based on the [https://docs.nestjs.com/techniques/validation](document)
- The app is using built in feature Exception filters to handle, custom error messages. Based on the [https://docs.nestjs.com/exception-filters](document)
- The app is using built in feature Logger to print the error messages. Based on the [https://docs.nestjs.com/techniques/logger](document)
- The app is also supporting API document using Swagger (http://localhost:3000/api). Based on the [https://docs.nestjs.com/openapi/introduction](document)

This is a pretty simple application, so I just go on the built in features to avoid the unnecessary complicated stuff
