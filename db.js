import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
//   host: process.env.DB_HOST || '127.0.0.1',
//   user: process.env.DB_USER || 'root1',
//   password: process.env.DB_PASSWORD || '',
//   database: process.env.DB_NAME || 'school_management',
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
try {
  const connection = await pool.getConnection();
  console.log('✅ MySQL Connected Successfully');
  connection.release();
} catch (error) {
  console.error('❌ MySQL Connection Error:', error);
}
export default pool;