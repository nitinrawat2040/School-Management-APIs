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

app.get("/", (req, res) => {
  res.send("School Management API is running 🚀");
});

app.use('/', schoolRoutes);

// health
app.get('/health', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    await connection.ping();
    connection.release();
    res.json({ status: 'ok', message: 'Server and Database are running' });
  } catch (err) {
    res.status(500).json({ status: 'error', message: 'Database not connected', error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});