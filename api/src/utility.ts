import jwt from 'jsonwebtoken';
import { LoginExpired, GeneralError } from './error';

const verifyJWTToken = (token: string) => {
  let decoded;

  const secret = process.env.JWT_TOKEN;

  if (!secret) {
    throw new GeneralError();
  }

  try {
    decoded = jwt.verify(token, secret);
  } catch (err) {
    if (err.name === jwt.TokenExpiredError.name) {
      throw new LoginExpired();
    } else {
      throw new LoginExpired(true);
    }
  }

  return decoded;
};

export default verifyJWTToken;
