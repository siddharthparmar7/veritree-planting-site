import { createPlantingSite, getPlantingSite, getPlantingSites } from "./plantingSite.controllers";

function plantingSiteRoutes(fastify, options, done) {
    fastify.get("/sites", getPlantingSites)
    fastify.get("/sites/:id", getPlantingSite)
    fastify.post("/sites", createPlantingSite)

    done()
}

export default plantingSiteRoutes