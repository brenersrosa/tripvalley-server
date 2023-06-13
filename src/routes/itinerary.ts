import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function itineraryRoutes(app: FastifyInstance) {
  // route create itinerary
  app.post('/itineraries', async (request, reply) => {
    const bodySchema = z.object({
      isActive: z.enum(['active', 'inactive']).default('active'),
      name: z.string(),
      numberOfDays: z.number(),
      description: z.string(),
      valuePerPerson: z.number(),
      content: z.array(z.string()),
      classification: z.array(z.string()),
      categoryId: z.string().uuid(),
      accommodationId: z.string().uuid(),
    })

    const {
      isActive,
      name,
      numberOfDays,
      description,
      valuePerPerson,
      content,
      classification,
      accommodationId,
      categoryId,
    } = bodySchema.parse(request.body)

    try {
      await prisma.itinerary.create({
        data: {
          isActive,
          name,
          numberOfDays,
          description,
          valuePerPerson,
          content,
          classification,
          categoryId,
          accommodationId,
        },
      })

      return reply
        .status(201)
        .send({ message: 'Itinerary created with success' })
    } catch (error) {
      console.log(error)
    }
  })

  // route get all itineraries
  app.get('/itineraries', async (request) => {
    const itineraries = await prisma.itinerary.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        accommodation: true,
        category: true,
      },
    })

    return itineraries
  })

  // route get one itinerary by id
  app.get('/itineraries/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const itinerary = await prisma.itinerary.findFirstOrThrow({
      where: {
        id,
      },
    })

    return itinerary
  })

  // route update itinerary
  app.put('/itineraries/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const bodySchema = z.object({
      isActive: z.enum(['active', 'inactive']).default('active'),
      name: z.string(),
      numberOfDays: z.number(),
      description: z.string(),
      valuePerPerson: z.number(),
      content: z.array(z.string()),
      classification: z.array(z.string()),
      categoryId: z.string().uuid(),
      accommodationId: z.string().uuid(),
    })

    const {
      isActive,
      name,
      numberOfDays,
      description,
      valuePerPerson,
      content,
      classification,
      categoryId,
      accommodationId,
    } = bodySchema.parse(request.body)

    try {
      const itinerary = await prisma.itinerary.update({
        where: {
          id,
        },
        data: {
          isActive,
          name,
          numberOfDays,
          description,
          valuePerPerson,
          content,
          classification,
          categoryId,
          accommodationId,
        },
      })

      return reply.status(200).send({
        message: 'Itinerary updated successfully.',
        itinerary,
      })
    } catch (error) {
      console.error('Error updating itinerary:', error)
      reply
        .status(500)
        .send({ error: 'An error occurred while updating the itinerary.' })
    }
  })

  // route delete itinerary
  app.delete('/itineraries/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const itinerary = await prisma.itinerary.delete({
      where: {
        id,
      },
    })

    return reply.status(200).send({
      message: 'Itinerary deleted successfully.',
      itinerary,
    })
  })
}
