import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function packageRoutes(app: FastifyInstance) {
  // route create package
  app.post('/package', async (request, reply) => {
    const bodySchema = z.object({
      isActive: z.boolean().default(true),
      name: z.string(),
      transferParticular: z.boolean().default(false),
      transferExclusive: z.boolean().default(false),
      transferShared: z.boolean().default(false),
      itineraries: z.array(z.string().uuid()),
    })

    const {
      isActive,
      name,
      transferParticular,
      transferExclusive,
      transferShared,
      itineraries,
    } = bodySchema.parse(request.body)

    console.log(itineraries)

    try {
      await prisma.package.create({
        data: {
          isActive,
          name,
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

      return reply.status(201).send({ message: 'Package created with success' })
    } catch (error) {
      console.log(error)
    }
  })

  // route get all accommodations
  app.get('/package', async (request) => {
    const packages = await prisma.package.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        itineraries: {
          include: {
            itinerary: {
              select: {
                name: true,
                numberOfDays: true,
                category: {
                  select: {
                    id: true,
                    name: true,
                  },
                },
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
  app.get('/package/:id', async (request) => {
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
  app.put('/package/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const bodySchema = z.object({
      isActive: z.boolean(),
      name: z.string(),
      transferParticular: z.boolean(),
      transferExclusive: z.boolean(),
      transferShared: z.boolean(),
      itineraries: z.array(
        z.object({
          id: z.string().uuid(),
          isActive: z.boolean(),
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

  // // route delete package
  app.delete('/package/:id', async (request, reply) => {
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
