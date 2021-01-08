import { MongoDataSource } from 'apollo-datasource-mongodb';
import { pictureBucket } from '../../index';
import { Scalars } from '../generated/graphql';

export type ApartmentPicture = {
    __typename?: 'ApartmentPicture';
    _id: Scalars['ID'];
    apartmentId: Scalars['ID'];
    filename: Scalars['String'];
    mimetype: Scalars['String'];
    encoding: Scalars['String'];
    fileId: Scalars['String'];
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

interface SavedFile {
  _id: Scalars['ID'],
  length: number,
  chunkSize: number,
  uploadDate: string;
  filename: string;
  md5: string;
}

export default class ApartmentPictures extends MongoDataSource<ApartmentPicture> {
  async addApartmentPicture(apartmentPicture: SubmittedApartmentPicture) {
    const savedPicture: SavedFile = await new Promise((resolve, reject) => apartmentPicture.createReadStream()
      .pipe(pictureBucket.openUploadStream(apartmentPicture.filename))
      .on('finish', (e: SavedFile) => {
        resolve(e);
      })
      .on('error', (e: any) => {
        reject(e);
      }));

    // @ts-ignore
    const result = await this.collection.insertOne({
      ...apartmentPicture,
      fileId: savedPicture._id,
    });

    return result.ops[0];
  }
}
