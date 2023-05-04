FROM node:16-alpine AS node

FROM node AS node-with-gyp
RUN apk add g++ make python3

FROM node-with-gyp AS builder
WORKDIR /packages/squid
ADD package.json .
ADD package-lock.json .
ADD tsconfig.json .
ADD src src
ADD schema.graphql .
RUN yarn install --immutable
RUN yarn codegen
RUN yarn build

FROM node-with-gyp AS deps
WORKDIR /packages/squid
ADD package.json .
ADD package-lock.json .
RUN yarn install --immutable

FROM node AS squid
WORKDIR /packages/squid
COPY --from=deps /packages/squid/package.json .
COPY --from=deps /packages/squid/package-lock.json .
COPY --from=deps /packages/squid/node_modules node_modules
COPY --from=builder /packages/squid/lib lib
RUN echo -e "loglevel=silent\nupdate-notifier=false" > /packages/squid/.npmrc
ADD db db
# TODO: use shorter PROMETHEUS_PORT
ENV PROMETHEUS_PORT 3000

FROM squid AS squid-indexer
CMD ["yarn", "squid-indexer:start"]

FROM squid AS graphql-server
CMD ["yarn", "graphql-server:start"]
