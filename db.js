import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
   host: process.env.MYSQLHOST || process.env.DB_HOST || '127.0.0.1',
  port: process.env.MYSQLPORT || process.env.DB_PORT || 3306,
  user: process.env.MYSQLUSER || process.env.DB_USER || 'root',
  password: process.env.MYSQLPASSWORD || process.env.DB_PASSWORD || '',
  database: process.env.MYSQLDATABASE || process.env.DB_NAME || 'school_management',
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