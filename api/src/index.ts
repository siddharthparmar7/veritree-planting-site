import dbConn from 'typeorm-fastify-plugin'
import { AppDataSource } from './data-source'
import { fastify, startServer } from './server'
import { generateDummyData } from './dummyData'

startServer()

fastify.get("/", async (request, reply) => {
    return { hello: "World" }
})

fastify.register(require('./routes/plantingSite/plantingSite.routes'));
fastify.register(require('./routes/mapboxTile/mapboxTile.routes'));
fastify.register(require('./routes/category/category.routes'));

fastify.register(dbConn, { connection: AppDataSource }).ready().then(generateDummyData)
