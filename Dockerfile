FROM --platform=linux/amd64 node:16-alpine AS node

FROM --platform=linux/amd64 node AS node-with-gyp
RUN apk add g++ make python3

FROM node-with-gyp AS builder
WORKDIR /multix
ADD .yarn/releases .yarn/releases
ADD .yarn/plugins .yarn/plugins
ADD package.json .
ADD yarn.lock .
ADD .yarnrc.yml .
ADD .env .
ADD packages/squid/package.json ./packages/squid/
ADD packages/squid/tsconfig.json ./packages/squid/
ADD packages/squid/src ./packages/squid/src
ADD packages/squid/schema.graphql ./packages/squid
RUN yarn install:squid
RUN yarn codegen:squid
RUN yarn build:squid
# WORKDIR /multix/packages/squid
# RUN npx squid-typeorm-migration generate

# FROM node-with-gyp AS deps
# WORKDIR /
# COPY --from=deps /squid/node_modules node_modules
# COPY --from=builder /squid/lib lib
# COPY --from=builder /squid/schema.graphql .
# ADD db db
# RUN echo -e "loglevel=silent\nupdate-notifier=false" > /squid/.npmrc

FROM node AS squid
WORKDIR /multix
RUN ls
COPY --from=builder multix/packages/squid/package.json .
COPY --from=builder multix/node_modules node_modules
COPY --from=builder multix/packages/squid/lib lib
COPY --from=builder multix/packages/squid/schema.graphql .
ADD db db
# RUN echo -e "loglevel=silent\nupdate-notifier=false" > /multix/.npmrc

FROM squid AS squid-indexer
CMD ["yarn", "start:squid-indexer"]

FROM squid AS graphql-server
CMD ["yarn", "start:graphql-server"]
