import {createPool} from 'mysql2/promise'
import {
    DB_HOST,
    DB_PORT,
    DB_DATABASE,
    DB_USER
} from './config.js'

export const pool = createPool({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    database: DB_DATABASE
})
pool.query