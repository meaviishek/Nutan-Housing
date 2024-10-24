import express from 'express';
 import cors from 'cors'
import advisorRoutes from './routes/advisorRoute.js'; 

const app = express();
app.use(cors());
// app.use((req, res, next) => {
//   res.setHeader(
//     'Content-Security-Policy',
//     "script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval' blob: https://nutan-housing-backend.vercel.app https://accounts.google.com; frame-src 'self' https://accounts.google.com; connect-src 'self' https://nutan-housing-backend.vercel.app https://accounts.google.com;"
//   );
//   next();
// });
app.use(express.json());


// app.use(cors({
//   origin: 'https://nutan-housing-uwc2.vercel.app',  // Your frontend domain
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],         // Allowed methods
//   allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
// }));
// app.use(cors())

// Advisor routes
app.get('/api/test', (req, res) => {
  res.send('CORS is working!');
});

app.use('/api/advisors', advisorRoutes);

app.get('/', (req, res) => {
  res.send('API is running...'); 
});

// Change module.exports to export default
export default app;  // Use default export
