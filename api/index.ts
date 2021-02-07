import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { MongoClient } from 'mongodb';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import * as dotenv from 'dotenv';
import * as path from 'path';
import Apartments from './src/data-sources/Apartments';
import schema from './src/schema/schema';
import Users from './src/data-sources/Users';
import ApartmentPictures from './src/data-sources/ApartmentPicture';

dotenv.config({
  path: path.join(__dirname, './.env'),
});

const mongoCredentials = `${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}`;
const mongoConnection = `${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`;

const client = new MongoClient(
  `mongodb://${mongoCredentials}@${mongoConnection}?authMechanism=DEFAULT`,
);

client.connect();

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  schema,
  context: ({ req, res }) => ({
    req,
    res,
    apartmentsApi: new Apartments(client.db('nesuto').collection('apartments')),
    usersApi: new Users(client.db('nesuto').collection('users')),
    apartmentPicturesApi: new ApartmentPictures(client.db('nesuto').collection('apartmentPictures')),
  }),
});

const corsOptions: cors.CorsOptions = {
  origin: process.env.CORS_ORIGIN,
  credentials: true,
};

const app = express();

app.use(cookieParser(process.env.NODE_COOKIE_SECRET));

server.applyMiddleware({
  app,
  cors: corsOptions,
  path: process.env.GRAPHQL_PATH,
});

app.listen(
  {
    port: process.env.GRAPHQL_PORT,
  },
  () => console.log(`🚀 Server ready at http://localhost:4000${process.env.NODE_ENV} `),
);
