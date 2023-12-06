import * as dotenv from 'dotenv'
dotenv.config()

interface AppConfig {
    db_type: string
    db_host: string
    db_port: number
    db_username: string
    db_password: string
    db_database: string
    jwt_secret: string
}

export default (): AppConfig => ENV

export const ENV = {
    db_type: 'postgres',
    db_host: process.env.DB_HOST,
    db_port: parseInt(<string>process.env.DB_PORT, 10) || 3000,
    db_username: process.env.DB_USERNAME,
    db_password: process.env.DB_PASSWORD,
    db_database: process.env.DB_DATABASE,
    jwt_secret: process.env.JWT_SECRET,
}
