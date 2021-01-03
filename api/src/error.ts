import { ApolloError } from 'apollo-server-express';

export class NoAuthentication extends ApolloError {
  constructor() {
    super('Combination wrong!', 'NO_AUTHENTICATION');
  }
}

export class NotLoggedIn extends ApolloError {
  constructor() {
    super('You are not logged in', 'NOT_LOGGED_IN');
  }
}

export class LoginExpired extends ApolloError {
  constructor(validationError = false) {
    let ERROR_TYPE = 'LOGIN_EXPIRED';

    if (validationError) {
      ERROR_TYPE = 'JWT_MALFORMED';
    }
    super('Your Login expired, please relog', ERROR_TYPE);
  }
}
