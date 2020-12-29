import { ApolloError } from 'apollo-server-express'

export class NoAuthentication extends ApolloError {
  constructor() {
      super('Combination wrong!', 'NO_AUTHENTICATION')
  }
}