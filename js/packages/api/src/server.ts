import { ApolloServer, ExpressContext } from 'apollo-server-express';
import { makeSchema } from 'nexus';
import { MetaplexApiDataSource } from './api';
import * as types from './schema';
import path from 'path';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe } from 'graphql';
import express from 'express';
import { createServer } from 'http';

async function startApolloServer() {
  const schema = makeSchema({
    types,
    outputs: {
      schema: __dirname + '/generated/schema.graphql',
      typegen: __dirname + '/generated/typings.ts',
    },
    sourceTypes: {
      modules: [
        {
          module: path.join(__dirname, 'sourceTypes.ts'),
          alias: 'common',
        },
      ],
      mapping: {
        Artwork: 'common.Artwork',
        Creator: 'common.Creator',
        Auction: 'common.Auction',
      },
    },
    contextType: {
      module: path.join(__dirname, 'context.ts'),
      export: 'Context',
    },
    features: {
      abstractTypeStrategies: {
        resolveType: true,
      },
    },
  });

  const api = new MetaplexApiDataSource();
  const dataSources = () => ({
    api,
  });

  const context = ({ req }: ExpressContext) => {
    const network = req.headers.network;
    return { network };
  };
  const PORT = process.env.PORT || 4000;
  const app = express();
  const server = new ApolloServer({ schema, dataSources, context });
  await server.start();
  server.applyMiddleware({ app });

  const httpServer = createServer(app);

  SubscriptionServer.create(
    { schema, execute, subscribe },
    { server: httpServer, path: server.graphqlPath },
  );

  httpServer.listen(PORT, () => {
    console.log(
      `🚀 Query endpoint ready at http://localhost:${PORT}${server.graphqlPath}`,
    );
    console.log(
      `🚀 Subscription endpoint ready at ws://localhost:${PORT}${server.graphqlPath}`,
    );
  });

  if (!process.env.WARN_UP_DISABLE) {
    console.log('🌋 Start warm up data');
    debugger;
    api.preload().then(() => console.log('🌋 Finish warm up data'));
  }
}

startApolloServer();
