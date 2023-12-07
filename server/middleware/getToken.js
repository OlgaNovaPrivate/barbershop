import jwt from 'jsonwebtoken';

const getToken = async req => {
  // get authorization token
  const authorization = req.headers.authorization;
  if (!authorization || !authorization.startsWith('Bearer')) {
    return '';
  } else {
    // get token
    const token = authorization.split(' ')[1];
    try {
      return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    } catch (error) {
      console.log('Could not parse token');
    }
  }
};
export { getToken };
