FROM --platform=linux/amd64 node:16-alpine AS node

FROM --platform=linux/amd64 node AS node-with-gyp
RUN apk add g++ make python3

FROM node-with-gyp AS builder
WORKDIR /squid
ADD ../.../package.json .
ADD ../.../yarn.lock .
ADD tsconfig.json .
ADD src src
ADD schema.graphql .
ADD corepack
RUN yarn install --immutable
RUN yarn codegen
RUN yarn build --production

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
COPY --from=builder /squid/schema.graphql .
ADD db db
RUN echo -e "loglevel=silent\nupdate-notifier=false" > /squid/.npmrc

FROM squid AS squid-indexer
CMD ["yarn", "squid-indexer:start"]

FROM squid AS graphql-server
CMD ["yarn", "graphql-server:start"]
