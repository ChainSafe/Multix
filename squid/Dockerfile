FROM --platform=linux/amd64 node:16-alpine AS node

FROM --platform=linux/amd64 node AS node-with-gyp
RUN apk add g++ make python3

FROM node-with-gyp AS builder
WORKDIR /squid
ADD package.json .
ADD package-lock.json .
ADD tsconfig.json .
ADD src src
ADD schema.graphql .
RUN npm ci
RUN npm run codegen
RUN npm run build

FROM node-with-gyp AS deps
WORKDIR /squid
ADD package.json .
ADD package-lock.json .
RUN npm ci --production

FROM node AS squid
WORKDIR /squid
COPY --from=deps /squid/package.json .
COPY --from=deps /squid/package-lock.json .
COPY --from=deps /squid/node_modules node_modules
COPY --from=builder /squid/lib lib
COPY --from=builder /squid/schema.graphql .
ADD db db
RUN echo -e "loglevel=silent\nupdate-notifier=false" > /squid/.npmrc

FROM squid AS squid-indexer
CMD ["npm", "run", "squid-indexer:start"]

FROM squid AS graphql-server
CMD ["npm", "run", "graphql-server:start"]
