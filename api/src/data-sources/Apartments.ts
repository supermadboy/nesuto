import { MongoDataSource } from 'apollo-datasource-mongodb';
import { ObjectId } from 'mongodb';

interface ApartmentDocument {
  _id: ObjectId
  title: string
  description: string
}

export default class Apartments extends MongoDataSource<ApartmentDocument> {
  apartments() {
    return this.collection.find({}).toArray();
  }

  async addApartment(title: string, description: string) {
    const result = await this.collection.insertOne({ title, description });

    return result.ops[0];
  }
}
