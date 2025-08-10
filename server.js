import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import schoolRoutes from './routes/schoolRoutes.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3100;

// middlewares
app.use(cors());
app.use(express.json());  

app.use('/', schoolRoutes);

// health
app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});