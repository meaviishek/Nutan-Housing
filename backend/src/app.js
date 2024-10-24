import express from 'express';
import cors from 'cors'; // Convert require to import
import advisorRoutes from './routes/advisorRoute.js'; 

const app = express();

app.use(express.json());

app.use(cors({
  origin: 'https://nutan-housing-uwc2.vercel.app', // Frontend origin
  credentials: true
}));
// app.use(cors())

// Advisor routes
app.use('/api/advisors', advisorRoutes);

app.get('/', (req, res) => {
  res.send('API is running...'); 
});

// Change module.exports to export default
export default app;  // Use default export
