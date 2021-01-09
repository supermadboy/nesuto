import { ApolloError } from 'apollo-server-express';

export class GeneralError extends ApolloError {
  constructor() {
    super('General error occured, check the logs', 'GENERAL_ERROR');
  }
}

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

export class CouldNotDeleteAllPictures extends ApolloError {
  constructor() {
    super('Not all pictures could be deleted from the cloud', 'NOT_ALL_PICTURES_WERE_DELETED');
  }
}
