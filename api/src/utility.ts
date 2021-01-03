import jwt from 'jsonwebtoken';
import { LoginExpired } from './error';

const verifyJWTToken = (token: string) => {
  let decoded;

  try {
    decoded = jwt.verify(token, 'supersecretjwttoken');
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
