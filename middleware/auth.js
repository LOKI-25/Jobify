import jwt from 'jsonwebtoken';
import { UnAuthenticatedError } from '../errors/index.js';

const auth = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log("in Auth.js line 5");
  console.log(res.set-cookie);
  console.log(" in auth.js line 6 ???????????"+token);
  if (!token) {
    throw new UnAuthenticatedError('Authentication Invalid??????????????(no token)');
  }
  try {
    const payload = jwt.verify(token, 'jwtSecret');
    const testUser = payload.userId === '63628d5d178e918562ef9ce8';
    req.user = { userId: payload.userId, testUser };
    next();
  } catch (error) {
    throw new UnAuthenticatedError('Authentication Invalid');
  }
};

export default auth;
