import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function accommodationRoutes(app: FastifyInstance) {
  // route create accommodation
  app.post('/accommodations', async (request, reply) => {
    const bodySchema = z.object({
      isActive: z.enum(['active', 'inactive']).default('active'),
      name: z.string(),
      description: z.string(),
      dailyValue: z.number(),
      imagePath: z.string(),
      zipCode: z.string(),
      addressName: z.string(),
      districtName: z.string(),
      addressNumber: z.string(),
      city: z.string(),
      singleRoom: z.boolean().default(false),
      doubleRoom: z.boolean().default(false),
      doubleBedroom: z.boolean().default(false),
      dormRoom: z.boolean().default(false),
      breakfast: z.boolean().default(false),
      lunch: z.boolean().default(false),
      dinner: z.boolean().default(false),
      wifi: z.boolean().default(false),
      petFriendly: z.boolean().default(false),
      parking: z.boolean().default(false),
      gyn: z.boolean().default(false),
      pool: z.boolean().default(false),
      onSiteRestaurants: z.boolean().default(false),
      nearbyRestaurants: z.boolean().default(false),
      roomService: z.boolean().default(false),
      transportService: z.boolean().default(false),
      childrensArea: z.boolean().default(false),
    })

    const {
      isActive,
      name,
      description,
      dailyValue,
      imagePath,
      zipCode,
      addressName,
      districtName,
      addressNumber,
      city,
      singleRoom,
      doubleRoom,
      doubleBedroom,
      dormRoom,
      breakfast,
      lunch,
      dinner,
      wifi,
      petFriendly,
      parking,
      gyn,
      pool,
      onSiteRestaurants,
      nearbyRestaurants,
      roomService,
      transportService,
      childrensArea,
    } = bodySchema.parse(request.body)

    try {
      await prisma.accommodation.create({
        data: {
          isActive,
          name,
          description,
          dailyValue,
          imagePath,
          zipCode,
          addressName,
          districtName,
          addressNumber,
          city,
          singleRoom,
          doubleRoom,
          doubleBedroom,
          dormRoom,
          breakfast,
          lunch,
          dinner,
          wifi,
          petFriendly,
          parking,
          gyn,
          pool,
          onSiteRestaurants,
          nearbyRestaurants,
          roomService,
          transportService,
          childrensArea,
        },
      })

      return reply
        .status(201)
        .send({ message: 'Accommodation created with success' })
    } catch (error) {
      console.log(error)
    }
  })

  // route get all accommodations
  app.get('/accommodations', async (request) => {
    const accommodations = await prisma.accommodation.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })

    return accommodations
  })

  // route get one accommodation by id
  app.get('/accommodations/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const accommodation = await prisma.accommodation.findFirstOrThrow({
      where: {
        id,
      },
    })

    return accommodation
  })

  // route update accommodation
  app.put('/accommodations/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const bodySchema = z.object({
      isActive: z.enum(['active', 'inactive']).default('active'),
      name: z.string(),
      description: z.string(),
      dailyValue: z.number(),
      imagePath: z.string(),
      zipCode: z.string(),
      addressName: z.string(),
      districtName: z.string(),
      addressNumber: z.string(),
      city: z.string(),
      singleRoom: z.boolean().default(false),
      doubleRoom: z.boolean().default(false),
      doubleBedroom: z.boolean().default(false),
      dormRoom: z.boolean().default(false),
      breakfast: z.boolean().default(false),
      lunch: z.boolean().default(false),
      dinner: z.boolean().default(false),
      wifi: z.boolean().default(false),
      petFriendly: z.boolean().default(false),
      parking: z.boolean().default(false),
      gyn: z.boolean().default(false),
      pool: z.boolean().default(false),
      onSiteRestaurants: z.boolean().default(false),
      nearbyRestaurants: z.boolean().default(false),
      roomService: z.boolean().default(false),
      transportService: z.boolean().default(false),
      childrensArea: z.boolean().default(false),
    })

    const {
      isActive,
      name,
      description,
      dailyValue,
      imagePath,
      zipCode,
      addressName,
      districtName,
      addressNumber,
      city,
      singleRoom,
      doubleRoom,
      doubleBedroom,
      dormRoom,
      breakfast,
      lunch,
      dinner,
      wifi,
      petFriendly,
      parking,
      gyn,
      pool,
      onSiteRestaurants,
      nearbyRestaurants,
      roomService,
      transportService,
      childrensArea,
    } = bodySchema.parse(request.body)

    try {
      const accommodation = await prisma.accommodation.update({
        where: {
          id,
        },
        data: {
          isActive,
          name,
          description,
          dailyValue,
          imagePath,
          zipCode,
          addressName,
          districtName,
          addressNumber,
          city,
          singleRoom,
          doubleRoom,
          doubleBedroom,
          dormRoom,
          breakfast,
          lunch,
          dinner,
          wifi,
          petFriendly,
          parking,
          gyn,
          pool,
          onSiteRestaurants,
          nearbyRestaurants,
          roomService,
          transportService,
          childrensArea,
        },
      })

      return reply.status(200).send({
        message: 'Accommodation updated successfully.',
        accommodation,
      })
    } catch (error) {
      console.error('Error updating accommodation:', error)
      reply
        .status(500)
        .send({ error: 'An error occurred while updating the accommodation.' })
    }
  })

  // route delete accommodation
  app.delete('/accommodations/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const accommodation = await prisma.accommodation.delete({
      where: {
        id,
      },
    })

    return reply.status(200).send({
      message: 'Accommodation deleted successfully.',
      accommodation,
    })
  })
}
