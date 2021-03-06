# Purpose

A recreation of the Massachusetts OEMS Protcols

## Getting started

```bash
git clone https://github.com/ParamagicDev/ma-protocol-rewrite.git
cd ma-protocol-rewrite
yarn install
gatsby develop
```

Open up a browser to `localhost:8000`

## Using Docker

```
git clone https://github.com/ParamagicDev/ma-protocol-rewrite.git
cd ma-protocol-rewrite
docker-compose up --build
```

Navigate to `localhost:8000` in the web browser

## Running the tests

```bash
git clone https://github.com/ParamagicDev/ma-protocol-rewrite.git
cd ma-protocol-rewrite
yarn install

# Running tests
yarn test # jest
yarn test:watch # jest --watch
yarn test:watchAll # jest --watchAll
```

## Issues

You may run into an issue with the `sharp` module saying it has not self
registered.

If this is the case run:

```bash
docker-compose run --rm web yarn install --force
docker-compose up
```

This will force a rebuild of your `node_modules` in docker.
