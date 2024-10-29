import jwt from 'jsonwebtoken';


// Middleware to protect routes
const protect = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const jwtSecret = process.env.JWT_SECRET
  // Ensure the token is extracted correctly
  console.log('Token:', token);   

  if (!token) { 
    return res.status(401).json({ error: 'No token, authorization denied' });
  }
  // const extractedToken = token.split(' ')[1];
  // res.status(401).json(token)
  try { 

   
    console.log('Extracted Token:', token);
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return res.status(403).json({ message: 'Token has expired or is invalid' });
      req.advisorId = decoded.advisorId;
      next();
    });
    // Verify token 
  
  
  } catch (error) {
    console.error('JWT Verification Error:', error);
    res.status(401).json({ error: 'Invalid token' });
  }
};

export { protect };
