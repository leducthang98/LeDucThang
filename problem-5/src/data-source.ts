require('dotenv').config();
import { DataSource } from "typeorm";

export const datasource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + '/entity/*.js'],
    migrations: [__dirname + '/migration/*.ts'],
    synchronize: true,
    logging: true
});