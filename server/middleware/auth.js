import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  // get authorization token
  const authorization = req.headers.authorization;
  if (!authorization || !authorization.startsWith('Bearer')) {
    res.status(401).json({ error: 'User token missing or invalid!' });
  } else {
    // get token
    const token = authorization.split(' ')[1];
    try {
      // verity token
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      // add clients data to request, se it can be found from called endpoint
      req.decoded = decoded;
      // go to next middleware
      next();
    } catch (error) {
      res.status(401).json({ error: 'JWT token is unauthorized!' });
    }
  }
};
export { auth };
