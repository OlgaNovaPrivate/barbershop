import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
  // get authorization token
  const authorization = req.headers.authorization;
  if (!authorization || !authorization.startsWith('Bearer')) {
    res.status(401).json({ error: 'User token missing or invalid!' });
  } else {
    // get token
    const token = authorization.split(' ')[1];
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      req.decoded = decoded;
      if (decoded.role !== 'admin') {
        res.status(401).json({ error: 'User is unauthorized!' });
      } else {
        next();
      }
    } catch (error) {
      res.status(401).json({ error: 'JWT token is unauthorized!' });
    }
  }
};
export { adminAuth };
