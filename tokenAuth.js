export const verifyToken = (req, res, next) => {
    let token = req.headers['authorization'];
    if (!token) {
      return res.status(403).json({ message: 'Token is not provided' });
    }
  
    // Check token format
    const tokenParts = token.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
      return res.status(403).json({ message: 'Invalid token format' });
    }
  
    jwt.verify(tokenParts[1], 'token', (err, decoded) => {
      if (err) {
        if (err.name === 'TokenExpiredError') {
          return res.status(401).json({ message: 'Token expired' });
        } else {
          return res.status(401).json({ message: 'Unauthorized: Invalid token' });
        }
      } 
      req.decoded = decoded;  
      console.log(req.decoded, 'token');
      next();
    });
  }
  