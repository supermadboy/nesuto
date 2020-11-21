import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { MongoClient } from 'mongodb';
import Apartments from './src/data-sources/Apartments';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Apartment {
    title: String
    description: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    apartments: [Apartment]
  }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    apartments: (_: any, __:any, { dataSources: { apartmentsApi }}: any) => apartmentsApi.apartments(),
  },
};

const client = new MongoClient('mongodb://root:root@localhost:27017?authMechanism=DEFAULT');

client.connect();
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    apartmentsApi: new Apartments(client.db('test').collection('apartments')),
  }),
});
const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
