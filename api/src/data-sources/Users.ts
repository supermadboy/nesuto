import { MongoDataSource } from 'apollo-datasource-mongodb';
import bcrypt from 'bcrypt';
import { User } from '../generated/graphql';
import { NoAuthentication } from '../error';

export default class Users extends MongoDataSource<User> {
  async checkUser(username: string, password: string) {
    const user = await this.collection.findOne({ username });

    if (!user) {
      throw new NoAuthentication();
    }

    const passwordCorrect = await bcrypt.compare(password, user.password);

    if (!passwordCorrect) {
      throw new NoAuthentication();
    }

    return user;
  }

  async addUser(username: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);

    // @ts-ignore
    const result = await this.collection.insertOne({ username, password: hashedPassword });

    return result.ops[0];
  }
}
