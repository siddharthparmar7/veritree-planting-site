import { Category } from "../../entity/Category.entity";
import { MapboxTile } from "../../entity/MapboxTile.entity";
import { PlantingSite } from "../../entity/PlantingSite.entity";
import { fastify } from "../../server";

export async function createMapboxTile(request, reply) {
    try {
        const { tileId, plantingSiteId, categoryId } = request.body;

        const siteRepo = fastify.orm.getRepository(PlantingSite)
        const tileRepo = fastify.orm.getRepository(MapboxTile)
        const categoryRepo = fastify.orm.getRepository(Category)

        // Check if the associated planting site exists
        const plantingSite = await siteRepo.findOne(plantingSiteId);
        if (!plantingSite) {
            reply.code(404).send({ error: 'Planting site not found' });
            return;
        }

        // Check if the associated category exists
        const category = await categoryRepo.findOne(categoryId);
        if (!category) {
            reply.code(404).send({ error: 'Category not found' });
            return;
        }

        const mapboxTile = new MapboxTile();
        mapboxTile.id = tileId;
        mapboxTile.plantingSite = plantingSite;
        mapboxTile.category = category;

        await tileRepo.save(mapboxTile);

        reply.code(201).send({ id: mapboxTile });
    } catch (error) {
        console.error(error);
        reply.code(500).send({ error: 'Internal Server Error' });
    }
}

export async function getMapboxTiles(request, reply) {
    try {
        const tileRepo = fastify.orm.getRepository(MapboxTile)
        const tiles = await tileRepo.find({ relations: ['plantingSite', 'category'], })

        reply.code(200).send(tiles)
    } catch (error) {
        console.error(error);
        reply.code(500).send({ error: 'Internal Server Error' });
    }
}