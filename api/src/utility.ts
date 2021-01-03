import jwt from 'jsonwebtoken';
import { LoginExpired, GeneralError } from './error';
import { ValidJwtToken } from './generated/graphql';

const verifyJWTToken = (token: string): ValidJwtToken => {
  let decoded;

  const secret = process.env.JWT_TOKEN;

  if (!secret) {
    throw new GeneralError();
  }

  try {
    decoded = jwt.verify(token, secret) as ValidJwtToken;
  } catch (err) {
    if (err.name === jwt.TokenExpiredError.name) {
      throw new LoginExpired();
    } else {
      throw new LoginExpired(true);
    }
  }

  return {
    isLoggedIn: decoded.isLoggedIn,
    token,
  };
};

export default verifyJWTToken;
