# Getting started with Multix

This UI is meant to be run alongside an indexer as presented in `../squid`


## Available scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3333](http://localhost:3333) to view it in the browser.

The page will reload if you make edits.


### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Environment file for development

To connect to your local indexer, you can rename `.env.example` into `.env` and change the values to your needs.

```bash
VITE_NETWORK_NAME="kusama" # for explorer links
VITE_WS_PROVIDER="wss://kusama-rpc.polkadot.io" # to check live on-chain data
VITE_GRAPHQL_WS_PROVIDER="http://localhost:4350/graphql" # for the indexer subscriptions
VITE_GRAPHQL_HTTP_PROVIDER="http://localhost:4350/graphql" # for the indexer queries
```

## Hacky watch account

You can watch an account by adding a local storage key:
`multix.watchedAccount` with an array of addresses `["1234...", "56789..."]` and this will be picked-up by the UI.
Particularly handy to see what is happening on someone else's multisig.