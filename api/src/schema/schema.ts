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

const Apartment = new GraphQLObjectType({
  name: 'Apartment',
  fields: {
    _id: { type: GraphQLID },
    title: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
  },
});

const addApartment = new GraphQLInputObjectType({
  name: 'addApartment',
  fields: {
    title: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
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
      async resolve(root, { title, description }, { apartmentsApi }: {apartmentsApi: Apartments}) {
        const result = await apartmentsApi.addApartment(title, description);

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
