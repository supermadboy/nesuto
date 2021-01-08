import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

const link = createUploadLink({
  uri: process.env.REACT_APP_API_ROUTE,
  credentials: 'include',
});

const client = new ApolloClient({
  /* @ts-ignore */
  link,
  cache: new InMemoryCache(),
});

export default client;
