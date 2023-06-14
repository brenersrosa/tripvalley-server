import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function categoryRoutes(app: FastifyInstance) {
  // route create category
  app.post('/categories', async (request, reply) => {
    const bodySchema = z.object({
      name: z.string(),
    })

    const { name } = bodySchema.parse(request.body)

    try {
      await prisma.category.create({
        data: {
          name,
        },
      })

      return reply
        .status(201)
        .send({ message: 'Category created with success' })
    } catch (error) {
      console.log(error)
    }
  })

  // route get all categories
  app.get('/categories', async (request) => {
    const categories = await prisma.category.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })

    return categories
  })

  // route get one category by id
  app.get('/categories/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const category = await prisma.category.findFirstOrThrow({
      where: {
        id,
      },
    })

    return category
  })

  // route update category
  app.put('/categories/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const bodySchema = z.object({
      name: z.string(),
    })

    const { name } = bodySchema.parse(request.body)

    try {
      const category = await prisma.category.update({
        where: {
          id,
        },
        data: {
          name,
        },
      })

      return reply.status(200).send({
        message: 'Category updated successfully.',
        category,
      })
    } catch (error) {
      console.error('Error updating category:', error)
      reply
        .status(500)
        .send({ error: 'An error occurred while updating the category.' })
    }
  })

  // route delete itinerary
  app.delete('/categories/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const category = await prisma.category.delete({
      where: {
        id,
      },
    })

    return reply.status(200).send({
      message: 'Category deleted successfully.',
      category,
    })
  })
}
