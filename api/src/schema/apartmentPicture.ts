import {
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { ApartmentPicture as ApartmentPictureType } from '../generated/graphql';

export const ApartmentPicture = new GraphQLObjectType({
  name: 'ApartmentPicture',
  fields: {
    _id: { type: GraphQLID },
    apartmentId: { type: GraphQLNonNull(GraphQLID) },
    order: { type: GraphQLNonNull(GraphQLInt) },
    filename: { type: GraphQLNonNull(GraphQLString) },
    mimetype: { type: GraphQLNonNull(GraphQLString) },
    encoding: { type: GraphQLNonNull(GraphQLString) },
    fileUrl: { type: GraphQLNonNull(GraphQLString) },
    cloudinaryName: { type: GraphQLNonNull(GraphQLString) },
  },
});

export const ApartmentPictureInput = new GraphQLInputObjectType({
  name: 'ApartmentPictureInput',
  fields: {
    name: { type: GraphQLNonNull(GraphQLString) },
  },
});

export interface SubmittedApartmentPicture extends ApartmentPictureType {
    createReadStream: Function;
}
