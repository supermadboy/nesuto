import { MongoDataSource } from 'apollo-datasource-mongodb';
import { ObjectID } from 'mongodb';
import { Apartment } from '../generated/graphql';

export default class Apartments extends MongoDataSource<Apartment> {
  apartments() {
    return this.collection.find({}).toArray();
  }

  async addApartment(apartment: Apartment) {
    // @ts-ignore
    const result = await this.collection.insertOne(apartment);

    return result.ops[0];
  }

  async removeApartment(_id: string) {
    // @ts-ignore
    const result = await this.collection.deleteOne({ _id: new ObjectID(_id) });

    return result.result;
  }
}
