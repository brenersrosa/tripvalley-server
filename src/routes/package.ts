import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function packageRoutes(app: FastifyInstance) {
  // route create package
  app.post('/packages', async (request, reply) => {
    const bodySchema = z.object({
      isActive: z.enum(['active', 'inactive']).default('active'),
      name: z.string(),
      description: z.string(),
      imagePath: z.string(),
      departureDate: z.date(),
      backDate: z.date(),
      transferParticular: z.boolean().default(false),
      transferExclusive: z.boolean().default(false),
      transferShared: z.boolean().default(false),
      itineraries: z.array(z.string().uuid()),
    })

    const {
      isActive,
      name,
      description,
      imagePath,
      departureDate,
      backDate,
      transferParticular,
      transferExclusive,
      transferShared,
      itineraries,
    } = bodySchema.parse(request.body)

    console.log(itineraries)

    try {
      const result = await prisma.package.create({
        data: {
          isActive,
          name,
          description,
          imagePath,
          departureDate,
          backDate,
          transferParticular,
          transferExclusive,
          transferShared,
          itineraries: {
            create: itineraries.map((itinerary) => ({
              itinerary: {
                connect: {
                  id: itinerary,
                },
              },
            })),
          },
        },
      })

      return reply
        .status(201)
        .send({ message: 'Package created with success', result })
    } catch (error) {
      console.log(error)
    }
  })

  // route get all accommodations
  app.get('/packages', async (request) => {
    const packages = await prisma.package.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        itineraries: {
          include: {
            itinerary: {
              include: {
                accommodation: true,
              },
            },
          },
        },
      },
    })

    return packages
  })

  // route get one accommodation by id
  app.get('/packages/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const result = await prisma.package.findFirstOrThrow({
      where: {
        id,
      },
      include: {
        itineraries: {
          include: {
            itinerary: {
              include: {
                accommodation: true,
                category: true,
              },
            },
          },
        },
      },
    })

    return result
  })

  // route update package
  app.put('/packages/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const bodySchema = z.object({
      isActive: z.enum(['active', 'inactive']).default('active'),
      name: z.string(),
      description: z.string(),
      imagePath: z.string(),
      departureDate: z.date(),
      backDate: z.date(),
      transferParticular: z.boolean(),
      transferExclusive: z.boolean(),
      transferShared: z.boolean(),
      itineraries: z.array(
        z.object({
          id: z.string().uuid(),
          isActive: z.enum(['active', 'inactive']).default('active'),
          name: z.string(),
          numberOfDays: z.number(),
          description: z.string(),
          valuePerPerson: z.number(),
          content: z.array(z.string()),
          classification: z.array(z.string()),
          categoryId: z.string().uuid(),
          accommodationId: z.string().uuid(),
        }),
      ),
    })

    const {
      isActive,
      name,
      imagePath,
      description,
      departureDate,
      backDate,
      transferParticular,
      transferExclusive,
      transferShared,
      itineraries,
    } = bodySchema.parse(request.body)

    try {
      const packageUpdate = await prisma.package.update({
        where: {
          id,
        },
        data: {
          isActive,
          name,
          description,
          imagePath,
          departureDate,
          backDate,
          transferParticular,
          transferExclusive,
          transferShared,
        },
      })

      const itinerariesUpdate = await Promise.all(
        itineraries.map(async (itinerary) => {
          const {
            id,
            isActive,
            name,
            numberOfDays,
            description,
            valuePerPerson,
            content,
            classification,
            categoryId,
            accommodationId,
          } = itinerary

          const updatedItinerary = await prisma.itinerary.update({
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

          return updatedItinerary
        }),
      )

      return reply.status(200).send({
        message: 'Package and itineraries updated successfully.',
        package: packageUpdate,
        itineraries: itinerariesUpdate,
      })
    } catch (error) {
      console.error('Error updating accommodation:', error)
      reply
        .status(500)
        .send({ error: 'An error occurred while updating the package.' })
    }
  })

  // route delete package
  app.delete('/packages/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    await prisma.itinerariesOnPackages.deleteMany({
      where: {
        packageId: id,
      },
    })

    await prisma.package.deleteMany({
      where: {
        id,
      },
    })

    return reply.status(200).send({
      message: 'Package deleted successfully.',
    })
  })
}
