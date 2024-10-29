import express from 'express';
 import cors from 'cors'
import advisorRoutes from './routes/advisorRoute.js'; 

const app = express();
// app.use(cors());
// app.use((req, res, next) => {
//   res.setHeader(
//     'Content-Security-Policy',
//     "script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval' blob: https://nutan-housing-backend.vercel.app https://accounts.google.com; frame-src 'self' https://accounts.google.com; connect-src 'self' https://nutan-housing-backend.vercel.app https://accounts.google.com;"
//   );
//   next();
// });
app.use(cors())
// app.use(cors({
//   origin: 'https://nutan-housing-finance.onrender.com',  // Frontend domain
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   credentials: true // Allow credentials like cookies, headers, etc.
// }));

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'https://nutan-housing-finance.onrender.com'); // Allow your frontend domain
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   res.header('Access-Control-Allow-Credentials', 'true');
//   next();
// });


app.use(express.json());

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
