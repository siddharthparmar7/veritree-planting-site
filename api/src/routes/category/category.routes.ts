import { createCategory, getCategory } from "./category.controller";

function categoryRoutes(fastify, options, done) {
    fastify.post('/category', createCategory);
    fastify.get('/category', getCategory);

    done()
}

export default categoryRoutes