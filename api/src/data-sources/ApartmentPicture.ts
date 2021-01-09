import { MongoDataSource } from 'apollo-datasource-mongodb';
import { ApartmentPicture, Scalars } from '../generated/graphql';
import { SubmittedApartmentPicture } from '../schema/apartmentPicture';
import cloudinaryUpload from '../services/cloudinary';

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

  async apartmentPicturesByApartmentId(apartmentId : any) {
    const result = await this.collection.find({ apartmentId });

    const pictures = await result.toArray();

    return pictures;
  }
}
