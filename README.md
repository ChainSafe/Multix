# Multix

## an interface to easily manage complex multisigs.

This repo contains the code to run an indexer see `./packages/squid` and a front-end, see `./packages/ui`.

## Running the project

You can run most of the project locally, except for the database that will run in a docker.

### Environment variables

You need to set up the `packages/squid/.env` file to tell the indexer what network to index. The following environment variables are expected. You can copy `packages/squid/.env.example` into `packages/squid/.env` as follow:

```bash
DB_PORT=5432
GQL_PORT=4350
SQD_DEBUG=sqd:processor:mapping

# rococo
BLOCK_START=3510000 # this is the starging block of the indexer
PREFIX=42 # the ss58 prefix for the chain
RPC_WS="wss://rococo-rpc.polkadot.io" # a WS endpoint to connect to a blockchain
ARCHIVE_NAME="rococo" # the archive name from subsquid archives
```

### Running the project locally

```bash
# install all dependancies
yarn;

# install and launch the db in a docker
yarn docker:db

# build the indexer, migrate the db and run the indexer
# this will block your current terminal window
yarn squid:start

# in a separate terminal window, run the graphql server
yarn squid:start:graphql-server;
```

### Running the project all in docker

You can allso run the whole project in docker in you want.

```bash
# Install all dependencies
yarn

# install and launch the db, the indexer and the graphql server in a docker
yarn docker:start:all

# you can see the logs with
docker compose logs

# you can stop all the docker instances with
yarn docker:down
```
