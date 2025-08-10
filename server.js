import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import schoolRoutes from './routes/schoolRoutes.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());  

app.use('/', schoolRoutes);

// health
app.get('/health', (req, res) => {
  db.ping(err => {
    if (err) {
      return res.status(500).json({ status: 'error', message: 'Database not connected' });
    }
    res.json({ status: 'ok', message: 'Server and Database are running' });
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});