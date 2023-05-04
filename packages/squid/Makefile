# docker related commands
build-squid-indexer-image:
	@docker build . --target squid-indexer -t squid-indexer

build-graphql-server-image:
	@docker build . --target graphql-server -t graphql-server

build-images: build-squid-indexer-image build-graphql-server-image

db:
	@docker-compose up -d db

down:
	@docker-compose down

ps:
	@docker compose ps

logs:
	@docker compose logs -f

# start the squid-indexer and the graphql-server using docker
up:
	@docker-compose up squid-indexer graphql-server

# start the squid-indexer without docker
squid-indexer: migrate
	@npm run squid-indexer:start

# start the graphql-server without docker
graphql-server:
	@npm run graphql-server:start

build:
	@npm run build

#serve:
#	@npm run graphql-server:start

migrate:
	@npx squid-typeorm-migration apply

generate-migration:
	@npx squid-typeorm-migration generate

codegen:
	@npx squid-typeorm-codegen

typegen:
	@npx squid-substrate-typegen typegen.json

.PHONY: build serve process migrate codegen typegen up down db
