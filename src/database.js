import mysql from 'mysql2/promise'

export const pool = mysql.createPool({
    host:process.env.DB_HOST || 'localhost',
    database:process.env.DB_NAME || 'user_db',
    user:process.env.DB_USER || 'root',
    password:process.env.PASSWORD || '',
    port:process.env.DB_PORT || 3306
})