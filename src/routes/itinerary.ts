import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function itineraryRoutes(app: FastifyInstance) {
  // route create itinerary
  app.post('/itinerary', async (request, reply) => {
    const bodySchema = z.object({
      isActive: z.boolean().default(true),
      name: z.string(),
      numberOfDays: z.number(),
      description: z.string(),
      valuePerPerson: z.number(),
      content: z.array(z.string()),
      classification: z.array(z.string()),
      transferParticular: z.boolean().default(false),
      transferExclusive: z.boolean().default(false),
      transferShared: z.boolean().default(false),
      categoryId: z.string().uuid(),
    })

    const {
      isActive,
      name,
      numberOfDays,
      description,
      valuePerPerson,
      content,
      classification,
      transferParticular,
      transferExclusive,
      transferShared,
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
          transferParticular,
          transferExclusive,
          transferShared,
          categoryId,
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
  app.get('/itinerary', async (request) => {
    const itineraries = await prisma.itinerary.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })

    return itineraries
  })

  // route get one itinerary by id
  app.get('/itinerary/:id', async (request) => {
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
  app.put('/itinerary/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const bodySchema = z.object({
      isActive: z.boolean().default(true),
      name: z.string(),
      numberOfDays: z.number(),
      description: z.string(),
      valuePerPerson: z.number(),
      content: z.array(z.string()),
      classification: z.array(z.string()),
      transferParticular: z.boolean().default(false),
      transferExclusive: z.boolean().default(false),
      transferShared: z.boolean().default(false),
      categoryId: z.string().uuid(),
    })

    const {
      isActive,
      name,
      numberOfDays,
      description,
      valuePerPerson,
      content,
      classification,
      transferParticular,
      transferExclusive,
      transferShared,
      categoryId,
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
          transferParticular,
          transferExclusive,
          transferShared,
          categoryId,
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
  app.delete('/itinerary/:id', async (request, reply) => {
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