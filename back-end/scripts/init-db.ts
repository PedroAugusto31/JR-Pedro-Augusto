import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

async function createDatabase() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  });

  await connection.query('CREATE DATABASE IF NOT EXISTS games_collection');
  await connection.end();
}

createDatabase();
