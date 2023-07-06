import Fastify from 'fastify'
require('dotenv').config()

export const fastify = Fastify({ logger: true })

const start = async () => {
    try {
        fastify.listen(process.env?.PORT || 4000, () => {
            console.log("Server running")
        })
    } catch (e) {
        fastify.log.error(e)
    }
}

export { start as startServer }
