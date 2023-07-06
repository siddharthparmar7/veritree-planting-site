import { Category } from "../../entity/Category.entity";
import { fastify } from "../../server";

export async function createCategory(request, reply) {
    try {
        const { name } = request.body;

        const category = new Category();
        category.name = name;

        const repo = fastify.orm.getRepository(Category)
        await repo.save(category);

        reply.code(201).send({ id: category.id });
    } catch (error) {
        console.error(error);
        reply.code(500).send({ error: 'Internal Server Error' });
    }
}

export async function getCategory(request, reply) {
    try {

        const repo = fastify.orm.getRepository(Category)
        const category = await repo.find({ relations: ['mapboxTiles'], });

        if (!category) {
            reply.code(404).send({ error: 'Category not found' });
            return;
        }

        reply.send(category);
    } catch (error) {
        console.error(error);
        reply.code(500).send({ error: 'Internal Server Error' });
    }
}
