process: migrate
	@node -r dotenv/config lib/processor.js


build:
	@npm run build

build-processor-image:
	@docker build . --target processor -t squid-processor

build-query-node-image:
	@docker build . --target query-node -t query-node

build-images: build-processor-image build-query-node-image

serve:
	@npx squid-graphql-server --subscriptions


migrate:
	@npx squid-typeorm-migration apply

generate-migration:
	@npx squid-typeorm-migration generate

codegen:
	@npx squid-typeorm-codegen


typegen:
	@npx squid-substrate-typegen typegen.json


up:
	@docker-compose up -d


down:
	@docker-compose down


.PHONY: build serve process migrate codegen typegen up down
