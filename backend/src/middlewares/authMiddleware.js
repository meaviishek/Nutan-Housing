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

    // Verify token 
    const decoded = jwt.verify(token, jwtSecret);
    req.advisorId = decoded.advisorId;

    next();
  } catch (error) {
    console.error('JWT Verification Error:', error);
    res.status(401).json({ error: 'Invalid token' });
  }
};

export { protect };
