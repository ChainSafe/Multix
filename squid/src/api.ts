import AggregatesPluggin from '@graphile/pg-aggregates'
import SimplifyInflectorPlugin from '@graphile-contrib/pg-simplify-inflector'
import express from 'express'
import { NodePlugin } from 'graphile-build'
import type * as pg from 'pg'
import { gql, makeExtendSchemaPlugin, postgraphile, Plugin, makePluginHook } from 'postgraphile'
import FilterPlugin from 'postgraphile-plugin-connection-filter'
import PgPubsub from '@graphile/pg-pubsub'

const app = express()

const pluginHook = makePluginHook([PgPubsub])

export const ProcessorStatusPlugin: Plugin = makeExtendSchemaPlugin((build, options) => {
  const schemas: string[] = options.stateSchemas || ['squid_processor']

  return {
    typeDefs: gql`
      type _ProcessorStatus {
        name: String!
        height: Int!
        hash: String!
      }

      extend type Query {
        _squidStatus: [_ProcessorStatus!]!
      }
    `,
    resolvers: {
      Query: {
        _squidStatus: async (parentObject, args, context) => {
          const pgClient: pg.Client = context.pgClient

          const { rows } = await pgClient.query(
            schemas
              .map((s) => `SELECT '${s}' as name , height, hash FROM ${s}.status`)
              .join(' UNION ALL ')
          )

          return rows || []
        }
      }
    }
  }
})

app.use(
  postgraphile(
    {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
      database: process.env.DB_NAME || 'postgres',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || 'postgres'
    },
    'public',
    {
      pluginHook, // add the plugin hook. This will make the @pgSubscription avaiable in our schema definitions
      graphiql: true,
      enhanceGraphiql: true,
      dynamicJson: true,
      disableDefaultMutations: true,
      skipPlugins: [NodePlugin],
      appendPlugins: [
        AggregatesPluggin,
        FilterPlugin,
        SimplifyInflectorPlugin,
        ProcessorStatusPlugin
      ],
      externalUrlBase: process.env.BASE_PATH,
      graphileBuildOptions: {
        stateSchemas: ['substrate']
      },
      // subscriptions: true,
      // simpleSubscriptions: true,
      live: true
    }
  )
)

app.listen(process.env.GQL_PORT, () => {
  console.log(`Squid API listening on port ${process.env.GQL_PORT}`)
})
