# Multix

<div style="text-align:center" width=500><img src=".github/images/MULTIX_LOGO_FULL_BLUE_1200px.png" /></div>

### an interface to easily manage complex multisigs.

### Play with Multix on https://multix.chainsafe.io/

This repo contains the code to run an indexer see `./squid` and a front-end, see `./packages/ui`.

## Running the project

You can run most of the project locally, except for the database that will run in a docker.

### Environment variables

You need to set up the `squid/.env` file to tell the indexer what network to index. The following environment variables are expected. You can copy `packages/squid/.env.example` into `packages/squid/.env` as follow:

```bash
DB_PORT=5432
GQL_PORT=4350
SQD_DEBUG=sqd:processor:mapping

# rococo
BLOCK_START=3510000 # this is the starging block of the indexer
PREFIX=42 # the ss58 prefix for the chain
RPC_WS="wss://rococo-rpc.polkadot.io" # a WS endpoint to connect to the blockchain
ARCHIVE_NAME="rococo" # the archive name from subsquid archives
 CHAIN_ID='rococo' # the name that will prefix most ids in the indexer's DB
```

### Running the project locally

#### Running the indexer locally

Install and launch the indexer and its DB. This will block the terminal

```bash
cd /squid;
docker compose up db -d;
npm run codegen;
npm run build;
npm run db:migrate;
npm run start:indexer # this will start the indexer using the envirnoment variables set in your .env
# alternatively, you can run with predefined values, see in /squid/assets/envs/, e.g here with polkadot
node -r dotenv/config lib/main dotenv_config_path=assets/envs/.env.polkadot
```

In another terminal, run the graphql server

```bash
npm run start:graphql-server
```

#### Running the front-end (user interface) locally

```bash
# install all dependancies
yarn;

# install and launch the db in a docker
yarn ui:start
```
