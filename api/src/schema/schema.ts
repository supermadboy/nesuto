import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';
import jwt from 'jsonwebtoken';
import ApartmentPictures from '../data-sources/ApartmentPicture';
import Apartments from '../data-sources/Apartments';
import { CouldNotDeleteAllPictures, GeneralError, NotLoggedIn } from '../error';
import verifyJWTToken from '../utility';
import { addApartment, Apartment, removeApartment } from './apartment';
import { SubmittedApartmentPicture } from './apartmentPicture';
import { addUser, User, ValidJWTToken } from './user';

const nesutoQueries = new GraphQLObjectType({
  name: 'Query',
  fields: {
    verify: {
      type: ValidJWTToken,
      async resolve(root, args, { usersApi, req }: any) {
        const result = await usersApi.validateJwtToken(req.signedCookies.token);

        return result;
      },
    },
    apartments: {
      type: GraphQLList(Apartment),
      async resolve(root, args, { apartmentsApi }: {apartmentsApi: Apartments, res: any}) {
        const result = await apartmentsApi.apartments();

        return result;
      },
    },
    login: {
      type: User,
      args: {
        username: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      async resolve(root, args, { usersApi, res }: any) {
        const result = await usersApi.loginUser(args.username, args.password);

        const secret = process.env.JWT_TOKEN;

        if (!secret) {
          throw new GeneralError();
        }

        const token = jwt.sign({
          isLoggedIn: true,
        }, secret);

        res.cookie('token', token, {
          expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 Days
          httpOnly: true,
          signed: true,
          secure: process.env.NODE_ENV === 'production',
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
      async resolve(root, { input }, { apartmentsApi, req, apartmentPicturesApi }:
        {apartmentsApi: Apartments, req: any, apartmentPicturesApi: ApartmentPictures}) {
        if (!req.signedCookies.token) {
          throw new NotLoggedIn();
        }

        const { apartmentPictures } = input;

        const apartmentObject = { ...input };
        delete apartmentObject.apartmentPictures;

        verifyJWTToken(req.signedCookies.token);

        const result = await apartmentsApi.addApartment(apartmentObject);

        await Promise.all(apartmentPictures).then((resolvedPictures: any) => {
          resolvedPictures.forEach((picture: SubmittedApartmentPicture, index: number) => {
            apartmentPicturesApi.addApartmentPicture({
              ...picture,
              apartmentId: result._id as any,
              order: index,
            });
          });
        });

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
      async resolve(root, { input }, { apartmentsApi, req, apartmentPicturesApi }: {apartmentsApi: Apartments,
        req: any, apartmentPicturesApi: ApartmentPictures}) {
        if (!req.signedCookies.token) {
          throw new NotLoggedIn();
        }

        verifyJWTToken(req.signedCookies.token);

        const pictureRemoveResult = await apartmentPicturesApi.deleteApartmentPicture(input._id);

        if (pictureRemoveResult.ok !== 1) {
          throw new CouldNotDeleteAllPictures();
        }

        const result = await apartmentsApi.removeApartment(input._id);

        if (result.ok === 1) {
          return { _id: input._id };
        }

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

        const result = await usersApi.addUser(input);

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
