import {
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';
import Apartments from '../data-sources/Apartments';
import Users from '../data-sources/Users';

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
      async resolve(root, args, { apartmentsApi }: {apartmentsApi: Apartments}) {
        const result = await apartmentsApi.apartments();

        return result;
      },
    },
    user: {
      type: User,
      args: {
        username: {type: GraphQLString},
        password: {type: GraphQLString},
      },
      async resolve(root, args, { usersApi }: any) {
        const result = await usersApi.checkUser(args.username, args.password);

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
      async resolve(root, { input }, { apartmentsApi }: {apartmentsApi: Apartments}) {
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
      async resolve(root, { input }, { apartmentsApi }: {apartmentsApi: Apartments}) {
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
      async resolve(root, { input }, { usersApi }: any) {
        const result = await usersApi.addUser(input.username, input.password);

        return result;
      },
    }
  },
});

const nesutoSchema = new GraphQLSchema({
  query: nesutoQueries,
  mutation: nesutoMutations,
});

export default nesutoSchema;
