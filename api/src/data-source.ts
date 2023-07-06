import "reflect-metadata"
import { DataSource } from "typeorm"
require('dotenv').config()

const { HOST, DBPORT, USERNAME, PASSWORD, DATABASE, LOGGING } = process.env

export const AppDataSource = new DataSource({
    type: "mysql",
    host: HOST,
    port: parseInt(DBPORT),
    username: USERNAME,
    password: PASSWORD,
    database: DATABASE,
    synchronize: true,
    logging: !!LOGGING,
    entities: ["src/entity/*.ts"]
})
