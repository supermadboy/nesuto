import {
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';
import jwt from 'jsonwebtoken';
import Apartments from '../data-sources/Apartments';
import { NotLoggedIn } from '../error';
import verifyJWTToken from '../utility';

const Apartment = new GraphQLObjectType({
  name: 'Apartment',
  fields: {
    _id: { type: GraphQLID },
    title: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
  },
});

const User = new GraphQLObjectType({
  name: 'User',
  fields: {
    _id: { type: GraphQLID },
    username: { type: GraphQLNonNull(GraphQLString) },
    password: { type: GraphQLNonNull(GraphQLString) },
  },
});

const addApartment = new GraphQLInputObjectType({
  name: 'addApartment',
  fields: {
    title: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
  },
});

const removeApartment = new GraphQLInputObjectType({
  name: 'removeApartment',
  fields: {
    _id: { type: GraphQLNonNull(GraphQLString) },
  },
});

const addUser = new GraphQLInputObjectType({
  name: 'addUser',
  fields: {
    username: { type: GraphQLNonNull(GraphQLString) },
    password: { type: GraphQLNonNull(GraphQLString) },
  },
});

const nesutoQueries = new GraphQLObjectType({
  name: 'Query',
  fields: {
    apartments: {
      type: GraphQLList(Apartment),
      async resolve(root, args, { apartmentsApi, res }: {apartmentsApi: Apartments, res: any}) {
        const result = await apartmentsApi.apartments();

        return result;
      },
    },
    user: {
      type: User,
      args: {
        username: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      async resolve(root, args, { usersApi, res }: any) {
        const result = await usersApi.checkUser(args.username, args.password);

        const token = jwt.sign({
          loggedIn: true,
        }, 'supersecretjwttoken');

        res.cookie('token', token, {
          expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 Days
          httpOnly: true,
          signed: true,
          secure: false,
        });

        return result;
      },
    },
  },
});

const nesutoMutations = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addApartment: {
      type: GraphQLNonNull(Apartment),
      args: {
        input: {
          type: GraphQLNonNull(addApartment),
        },
      },
      async resolve(root, { input }, { apartmentsApi, req }: {apartmentsApi: Apartments, req: any}) {
        if (!req.signedCookies.token) {
          throw new NotLoggedIn();
        }

        verifyJWTToken(req.signedCookies.token);

        const result = await apartmentsApi.addApartment(input.title, input.description);

        return result;
      },
    },
    removeApartment: {
      type: GraphQLNonNull(Apartment),
      args: {
        input: {
          type: GraphQLNonNull(removeApartment),
        },
      },
      async resolve(root, { input }, { apartmentsApi, req }: {apartmentsApi: Apartments, req: any}) {
        if (!req.signedCookies.token) {
          throw new NotLoggedIn();
        }

        verifyJWTToken(req.signedCookies.token);

        const result = await apartmentsApi.removeApartment(input._id);

        return result;
      },
    },
    addUser: {
      type: GraphQLNonNull(User),
      args: {
        input: {
          type: GraphQLNonNull(addUser),
        },
      },
      async resolve(root, { input }, { usersApi, req }: any) {
        if (!req.signedCookies.token) {
          throw new NotLoggedIn();
        }

        verifyJWTToken(req.signedCookies.token);

        const result = await usersApi.addUser(input.username, input.password);

        return result;
      },
    },
  },
});

const nesutoSchema = new GraphQLSchema({
  query: nesutoQueries,
  mutation: nesutoMutations,
});

export default nesutoSchema;
