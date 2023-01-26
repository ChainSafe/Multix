# Getting started with Multix

This UI is meant to be run alongside an indexer as presented in `../squid`


### Environment file

To start simply, you can rename `.env.example` into `.env`.

```
VITE_WS_PROVIDER="wss://rococo-rpc.polkadot.io"
VITE_GRAPHQL_HTTP_PROVIDER="ws://localhost:4350/graphql"
VITE_GRAPHQL_WS_PROVIDER="http://localhost:4350/graphql"
```

## Available scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3333](http://localhost:3333) to view it in the browser.

The page will reload if you make edits.


### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
