# Multix
## an interface to easily manage complex multisigs.

This repo contains the code to run an indexer see `./packages/squid` and a front-end, see `./packages/ui`.

You can run all the project in dockers and send

```
yarn squid:build && yarn squid:codegen && yarn squid:migrate && yarn squid:start:indexer
```