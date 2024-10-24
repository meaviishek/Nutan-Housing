import http from 'http';
import app from './app.js';
import connectDB from './db/index.js';  // Your DB connection
import dotenv from 'dotenv';
import cors from 'cors'
dotenv.config();  // Load environment variables
app.use(cors());
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Start the server 
const server = http.createServer(app); 

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); 
});
