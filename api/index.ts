import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { MongoClient } from 'mongodb';
import Apartments from './src/data-sources/Apartments';
import schema from './src/schema/schema';
import Users from './src/data-sources/Users';

const client = new MongoClient('mongodb://root:root@localhost:27017?authMechanism=DEFAULT');

client.connect();
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  schema,
  context: () => ({
    apartmentsApi: new Apartments(client.db('nesuto').collection('apartments')),
    usersApi: new Users(client.db('nesuto').collection('users')),
  }),
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
