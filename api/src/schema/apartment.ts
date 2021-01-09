import { GraphQLUpload } from 'apollo-server-express';
import {
  GraphQLBoolean,
  GraphQLEnumType,
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { ApartmentPicture } from './apartmentPicture';

const Payment = new GraphQLEnumType({
  name: 'PaymentType',
  values: {
    BUY: { value: 'buy' },
    RENT: { value: 'rent' },
  },
});

const Hashtags = new GraphQLEnumType({
  name: 'HashtagsType',
  values: {
    GARAGE: { value: 'garage' },
    FURNISHED: { value: 'furnished' },
    KITCHEN: { value: 'kitchen' },
    TERRACE: { value: 'terrace' },
    GARDEN: { value: 'garden' },
    BALCONY: { value: 'balcony' },
  },
});

export const Apartment = new GraphQLObjectType({
  name: 'Apartment',
  fields: {
    _id: { type: GraphQLID },
    title: { type: GraphQLNonNull(GraphQLString) },
    subtitle: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
    price: { type: GraphQLNonNull(GraphQLInt) },
    numberOfRooms: { type: GraphQLNonNull(GraphQLInt) },
    paymentType: { type: GraphQLList(Payment) },
    hashtags: { type: GraphQLList(Hashtags) },
    apartmentPictures: {
      type: GraphQLList(ApartmentPicture),
      resolve: async (apartment, {}, { apartmentPicturesApi }) => {
        const pictures = await apartmentPicturesApi.apartmentPicturesByApartmentId(apartment._id);

        return pictures;
      },
    },
  },
});

export const addApartment = new GraphQLInputObjectType({
  name: 'addApartment',
  fields: {
    title: { type: GraphQLNonNull(GraphQLString) },
    subtitle: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
    price: { type: GraphQLNonNull(GraphQLInt) },
    numberOfRooms: { type: GraphQLNonNull(GraphQLInt) },
    paymentType: { type: GraphQLList(Payment) },
    hashtags: { type: GraphQLList(Hashtags) },
    apartmentPictures: { type: new GraphQLList(GraphQLUpload!) },
  },
});

export const removeApartment = new GraphQLInputObjectType({
  name: 'removeApartment',
  fields: {
    _id: { type: GraphQLNonNull(GraphQLString) },
  },
});
