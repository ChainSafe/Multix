# Getting started with Multix

This UI is meant to be run alongside an indexer as presented in `../squid`


### Environment file

To start simply, you can rename `.env.example` into `.env`.

```
VITE_WS_PROVIDER="wss://rococo-rpc.polkadot.io"
VITE_GRAPHQL_PROVIDER="ws://127.0.0.1:4350"
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
