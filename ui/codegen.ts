
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  // ignoreNoDocuments: true, // for better experience with the watcher
  overwrite: true,
  schema: "http://localhost:4350/graphql",
  documents: "src/**/*.graphql",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: []
    },
    "types-and-hooks.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query"
      ],
      config: {
        fetcher: './src/fetcher#fetchData'
      }
    }
  }
};

export default config;
