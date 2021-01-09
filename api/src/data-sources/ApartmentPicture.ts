import { MongoDataSource } from 'apollo-datasource-mongodb';
import { ObjectID } from 'mongodb';
import { ApartmentPicture } from '../generated/graphql';
import { SubmittedApartmentPicture } from '../schema/apartmentPicture';
import { cloudinaryUpload, cloudinaryDelete } from '../services/cloudinary';

export default class ApartmentPictures extends MongoDataSource<ApartmentPicture> {
  async addApartmentPicture(apartmentPicture: SubmittedApartmentPicture) {
    const savedPictureUrl = await cloudinaryUpload(apartmentPicture.createReadStream());

    // @ts-ignore
    const result = await this.collection.insertOne({
      ...apartmentPicture,
      fileUrl: savedPictureUrl.url,
      cloudinaryName: savedPictureUrl.publicId,
    });

    return result.ops[0];
  }

  async apartmentPicturesByApartmentId(apartmentId : ObjectID) {
    // @ts-ignore
    const result = await this.collection.find({ apartmentId });

    const pictures = await result.toArray();

    return pictures;
  }

  async deleteApartmentPicture(apartmentId: string) {
    // @ts-ignore
    const result = await this.collection.find({ apartmentId: new ObjectID(apartmentId) });

    const pictures = await result.toArray();

    cloudinaryDelete(pictures[0].cloudinaryName);

    const deletedPictures: ObjectID[] = [];

    pictures.forEach((picture) => {
      if (cloudinaryDelete(picture.cloudinaryName)) {
        if (picture._id) {
          // @ts-ignore
          deletedPictures.push(picture._id);
        }
      }
    });

    // @ts-ignore
    const deleteDBResult = await this.collection.deleteMany({ _id: { $in: deletedPictures } });

    return deleteDBResult.result;
  }
}
