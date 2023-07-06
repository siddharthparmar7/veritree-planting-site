import { PlantingSite } from "../../entity/PlantingSite.entity"
import { fastify } from "../../server"

export async function createPlantingSite(request, reply) {
    try {
        const { id, name, mapboxTiles } = request.body

        let newSite = new PlantingSite()
        newSite = {
            id, name, mapboxTiles
        }

        const repo = fastify.orm.getRepository(PlantingSite)
        await repo.save(newSite)

        reply.code(201).send(newSite);
    } catch (error) {
        console.error(error);
        reply.code(500).send({ error: 'Internal Server Error' });
    }
}

export async function getPlantingSites(request, reply) {
    try {
        const repo = fastify.orm.getRepository(PlantingSite)

        const sites = await repo.find({ relations: ['mapboxTiles', 'mapboxTiles.category'] })

        if (!sites) {
            reply.code(404).send({ error: 'Planting site not found' });
            return;
        }

        reply.send(sites);
    } catch (error) {
        console.error(error);
        reply.code(500).send({ error: 'Internal Server Error' });
    }
}

export async function getPlantingSite(request, reply) {
    try {

        const { id } = request.params

        const repo = fastify.orm.getRepository(PlantingSite)

        const site = await repo.findOneBy({ id })

        if (!site) {
            reply.code(404).send({ error: 'Planting site not found' });
            return;
        }

        reply.send(site);
    } catch (error) {
        console.error(error);
        reply.code(500).send({ error: 'Internal Server Error' });
    }
}