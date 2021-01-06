import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

const PaymentType = new GraphQLObjectType({
  name: 'PaymentType',
  fields: {
    buy: { type: GraphQLNonNull(GraphQLBoolean) },
    rent: { type: GraphQLNonNull(GraphQLBoolean) },
  },
});

const PaymentTypeInput = new GraphQLInputObjectType({
  name: 'PaymentTypeInput',
  fields: {
    buy: { type: GraphQLNonNull(GraphQLBoolean) },
    rent: { type: GraphQLNonNull(GraphQLBoolean) },
  },
});

const Hashtags = new GraphQLObjectType({
  name: 'Hashtags',
  fields: {
    garage: { type: GraphQLNonNull(GraphQLBoolean) },
    furnished: { type: GraphQLNonNull(GraphQLBoolean) },
    kitchen: { type: GraphQLNonNull(GraphQLBoolean) },
    terrace: { type: GraphQLNonNull(GraphQLBoolean) },
    garden: { type: GraphQLNonNull(GraphQLBoolean) },
    balcony: { type: GraphQLNonNull(GraphQLBoolean) },
  },
});

const HashtagsInput = new GraphQLInputObjectType({
  name: 'HashtagsInput',
  fields: {
    garage: { type: GraphQLNonNull(GraphQLBoolean) },
    furnished: { type: GraphQLNonNull(GraphQLBoolean) },
    kitchen: { type: GraphQLNonNull(GraphQLBoolean) },
    terrace: { type: GraphQLNonNull(GraphQLBoolean) },
    garden: { type: GraphQLNonNull(GraphQLBoolean) },
    balcony: { type: GraphQLNonNull(GraphQLBoolean) },
  },
});

export const Apartment = new GraphQLObjectType({
  name: 'Apartment',
  fields: {
    _id: { type: GraphQLID },
    title: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
    price: { type: GraphQLNonNull(GraphQLInt) },
    numberOfRooms: { type: GraphQLNonNull(GraphQLInt) },
    paymentType: { type: PaymentType },
    hashtags: { type: Hashtags },
  },
});

export const addApartment = new GraphQLInputObjectType({
  name: 'addApartment',
  fields: {
    title: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
    price: { type: GraphQLNonNull(GraphQLInt) },
    numberOfRooms: { type: GraphQLNonNull(GraphQLInt) },
    paymentType: { type: PaymentTypeInput },
    hashtags: { type: HashtagsInput },
  },
});

export const removeApartment = new GraphQLInputObjectType({
  name: 'removeApartment',
  fields: {
    _id: { type: GraphQLNonNull(GraphQLString) },
  },
});
