<p align="center"><img src=".github/images/MULTIX_LOGO_FULL_BLUE_1200px.png" width=500 /></p>

# Multix

### an interface to easily manage complex multisigs.

### https://multix.chainsafe.io

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
BLOCK_START=3510000 # this is the starting block of the indexer
PREFIX=42 # the ss58 prefix for the chain
RPC_WS="wss://rococo-rpc.polkadot.io" # a WS endpoint to connect to the blockchain
ARCHIVE_NAME="rococo" # the archive name from subsquid archives
CHAIN_ID='rococo' # the name that will prefix most ids in the indexer's DB
```

### Running the project locally

#### Running the indexer locally

Install and launch the indexer and its DB. This will block the terminal

```bash
cd squid;
npm install;
docker compose up db -d;
npm run codegen;
npm run build;
npm run db:migrate;
npm run start:indexer # this will start the indexer using the environment variables set in your .env
# alternatively, you can run with predefined values, see in /squid/assets/envs/, e.g here with polkadot
node -r dotenv/config lib/main dotenv_config_path=assets/envs/.env.polkadot
```

In the squid directory but another terminal window, run the graphql server

```bash
npm run start:graphql-server
```

#### Running the front-end (user interface) locally

From the repository root

```bash
# install all dependencies
yarn;

# install and launch the db in a docker
yarn ui:start
```

## Docker development

* Install and run [Docker](https://www.docker.com/)
* Configure .env files ./packages/ui and ./squid directories
* Build and run Docker containers
```bash
time ./docker/docker.sh
```
* Enter Docker container
```bash
docker exec -it multix-ui-dev /bin/sh
```
* Exit Docker container with CTRL+C

### Terminal #1

```bash
docker exec -w /multix/squid -it multix-ui-dev npm run db:migrate
# this will start the indexer using the environment variables set in your .env
docker exec -w /multix/squid -it multix-ui-dev npm run start:indexer
```

> Alternatively use predefined values
```bash
docker exec -w /multix/squid -it multix-ui-dev npm run db:migrate
# alternatively, you can run with predefined values, see in /squid/assets/envs/, e.g here with polkadot
docker exec -w /multix/squid -it multix-ui-dev node -r dotenv/config lib/main dotenv_config_path=assets/envs/.env.polkadot
```

### Terminal #2

```bash
docker exec -w /multix/squid -it multix-ui-dev npm run start:graphql-server
```

### Terminal #3

```bash
docker exec -w /multix/packages/ui -it multix-ui-dev yarn start \
  --host 0.0.0.0 \
  --port 3333 \
  --cors true \
  --logLevel info \
  --debug true
```
> Note: Replace `start` with `build` if you change to `NODE_ENV=production`

Go to http://localhost:3333/?network=kusama

> Note: Replace `local` with the value used for `VITE_NETWORK_NAME`

View database logs
```bash
docker logs -f subsquid_db
```

### Docker Troubleshooting

* Kill a port `PORT` (e.g. `33045`)
```bash
PORT=33045
kill -9 $(lsof -ti tcp:$PORT)
```

* Restart a Docker container name (e.g. `subsquid_db`) that is shown as `Exited` when you run `docker ps -a`
```bash
CONTAINER_NAME=subsquid_db
docker restart CONTAINER_NAME
```

* If you get error `error from daemon in stream: Error grabbing logs: invalid character '\x00' looking for beginning of value` when viewing Docker logs with `docker logs -f subsquid_db` then:
  * Add `ENV LANG=C.UTF-8` to the Dockerfile. See https://github.com/docker/for-linux/issues/140#issuecomment-571519609
  * **TODO** - check this actually works

* List Docker containers
```bash
docker ps -a
```

* List Docker images
```bash
docker images -a
```

* Enter Docker container shell
```bash
CONTAINER_NAME=multix-ui-dev
docker exec -it $CONTAINER_NAME /bin/sh
```

* View Docker container logs
```bash
docker logs -f $CONTAINER_ID
```

* Remove Docker container
```bash
docker stop $CONTAINER_NAME; docker rm $CONTAINER_NAME;
```

* Remove Docker image
```bash
docker rmi $IMAGE_ID
```
