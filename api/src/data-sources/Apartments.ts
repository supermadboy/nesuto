import { MongoDataSource } from 'apollo-datasource-mongodb';
import { Apartment } from '../generated/graphql';

export default class Apartments extends MongoDataSource<Apartment> {
  apartments() {
    return this.collection.find({}).toArray();
  }

  async addApartment(title: string, description: string) {
    // @ts-ignore
    const result = await this.collection.insertOne({ title, description });

    return result.ops[0];
  }
}
