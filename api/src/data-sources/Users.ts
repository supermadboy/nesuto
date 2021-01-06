import { MongoDataSource } from 'apollo-datasource-mongodb';
import bcrypt from 'bcrypt';
import { User, ValidJwtToken } from '../generated/graphql';
import { NoAuthentication } from '../error';
import verifyJWTToken from '../utility';

export default class Users extends MongoDataSource<User> {
  async loginUser(username: string, password: string) {
    const user = await this.collection.findOne({ username });

    if (!user) {
      throw new NoAuthentication();
    }

    const passwordCorrect = await bcrypt.compare(password, user.password);

    if (!passwordCorrect) {
      throw new NoAuthentication();
    }

    return {
      username: user.username,
    };
  }

  validateJwtToken = (jwtToken: string): ValidJwtToken => {
    const decoded = verifyJWTToken(jwtToken);

    return decoded;
  }

  async addUser(user: User) {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    // @ts-ignore
    const result = await this.collection.insertOne({ username: user.username, password: hashedPassword });

    return result.ops[0];
  }
}
