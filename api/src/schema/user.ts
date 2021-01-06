import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
  } from 'graphql';

export const ValidJWTToken = new GraphQLObjectType({
  name: 'ValidJWTToken',
  fields: {
    token: { type: GraphQLNonNull(GraphQLString) },
    isLoggedIn: { type: GraphQLNonNull(GraphQLBoolean) },
  },
});

export const User = new GraphQLObjectType({
  name: 'User',
  fields: {
    _id: { type: GraphQLID },
    username: { type: GraphQLNonNull(GraphQLString) },
    password: { type: GraphQLNonNull(GraphQLString) },
  },
});

export const addUser = new GraphQLInputObjectType({
  name: 'addUser',
  fields: {
    username: { type: GraphQLNonNull(GraphQLString) },
    password: { type: GraphQLNonNull(GraphQLString) },
  },
});
