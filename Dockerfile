# node alpine image
FROM node:16-alpine AS node

# node with gyp for complex executions
FROM node AS node-with-gyp
RUN apk add g++ make python3

# build the application to generate a distributable package
FROM node-with-gyp AS builder
WORKDIR /multix

ADD .yarn/ .yarn/
ADD package.json .
ADD yarn.lock .
ADD .yarnrc.yml .

ADD packages/squid/package.json ./packages/squid/
ADD packages/squid/tsconfig.json ./packages/squid/
ADD packages/squid/src ./packages/squid/src
ADD packages/squid/schema.graphql ./packages/squid

RUN yarn set version berry
RUN yarn workspaces focus multix-squid
RUN yarn workspace multix-squid codegen
RUN yarn workspace multix-squid build

# squid app
FROM node AS squid

WORKDIR /multix

COPY --from=builder multix/packages/squid/package.json .
COPY --from=builder multix/node_modules node_modules
COPY --from=builder multix/packages/squid/lib lib
COPY --from=builder multix/packages/squid/schema.graphql .
COPY --from=builder multix/.yarn multix/.yarn

ADD packages/squid/db db
RUN corepack enable
RUN yarn set version berry

# indexer image that will be published
FROM squid AS squid-indexer
CMD ["yarn", "start:indexer"]

# graphql server that will be published
FROM squid AS graphql-server
CMD ["yarn", "start:graphql-server"]
