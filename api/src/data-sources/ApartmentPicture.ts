import { MongoDataSource } from 'apollo-datasource-mongodb';
import { Scalars } from '../generated/graphql';
import cloudinaryUpload from '../services/cloudinary';

export type ApartmentPicture = {
    __typename?: 'ApartmentPicture';
    _id: Scalars['ID'];
    apartmentId: Scalars['ID'];
    filename: Scalars['String'];
    mimetype: Scalars['String'];
    encoding: Scalars['String'];
    fileUrl: Scalars['String'];
    order: Scalars['Int'];
  };

export interface SubmittedApartmentPicture {
    apartmentId: Scalars['ID'];
    filename: Scalars['String'];
    mimetype: Scalars['String'];
    encoding: Scalars['String'];
    createReadStream: Function;
    order: Scalars['Int'];
}

export default class ApartmentPictures extends MongoDataSource<ApartmentPicture> {
  async addApartmentPicture(apartmentPicture: SubmittedApartmentPicture) {
    const savedPictureUrl: string = await cloudinaryUpload(apartmentPicture.createReadStream());

    // @ts-ignore
    const result = await this.collection.insertOne({
      ...apartmentPicture,
      fileUrl: savedPictureUrl,
    });

    return result.ops[0];
  }
}
