import { createMapboxTile, getMapboxTiles } from "./mapboxTile.controller";


function mapboxTileRoutes(fastify, options, done) {
    fastify.post('/tiles', createMapboxTile);
    fastify.get('/tiles', getMapboxTiles);

    done()
}

export default mapboxTileRoutes