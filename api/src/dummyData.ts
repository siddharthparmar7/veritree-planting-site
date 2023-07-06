import { Category } from "./entity/Category.entity";
import { MapboxTile } from "./entity/MapboxTile.entity";
import { PlantingSite } from "./entity/PlantingSite.entity";
import { fastify } from "./server";

export async function generateDummyData() {
    try {

        const siteRepo = fastify.orm.getRepository(PlantingSite)
        const tileRepo = fastify.orm.getRepository(MapboxTile)
        const categoryRepo = fastify.orm.getRepository(Category)

        // Create Planting Sites
        const plantingSite1 = new PlantingSite();
        plantingSite1.id = 1;
        plantingSite1.name = 'Planting Site 1';
        await siteRepo.save(plantingSite1);

        const plantingSite2 = new PlantingSite();
        plantingSite2.id = 2;
        plantingSite2.name = 'Planting Site 2';
        await siteRepo.save(plantingSite2);

        // Create Categories
        const category1 = new Category();
        category1.name = 'Category 1';
        await categoryRepo.save(category1);

        const category2 = new Category();
        category2.name = 'Category 2';
        await categoryRepo.save(category2);

        // Create Mapbox Tiles
        const tile1 = new MapboxTile();
        tile1.id = 'T1';
        tile1.name = "tile 1"
        tile1.plantingSite = plantingSite1;
        tile1.category = category1;
        await tileRepo.save(tile1);

        const tile2 = new MapboxTile();
        tile2.id = 'T2';
        tile2.name = "tile 2"
        tile2.plantingSite = plantingSite2;
        tile2.category = category2;
        await tileRepo.save(tile2);

        console.log('Dummy data generated successfully');
    } catch (error) {
        console.error('Error generating dummy data:', error);
    }
}
