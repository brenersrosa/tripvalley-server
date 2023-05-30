import { FastifyInstance } from 'fastify'
import { z } from 'zod'

import { prisma } from '../lib/prisma'

export async function orderRoutes(app: FastifyInstance) {
  // route create order
  app.post('/orders', async (request, reply) => {
    const bodySchema = z.object({
      status: z
        .enum(['awaiting', 'refused', 'accept', 'canceled'])
        .default('awaiting'),
      userId: z.string().uuid(),
      packageId: z.string().uuid(),
      totalValue: z.number(),
      companions: z.array(
        z.object({
          name: z.string(),
          document: z.string(),
          age: z.number(),
        }),
      ),
    })

    const { status, userId, packageId, totalValue, companions } =
      bodySchema.parse(request.body)

    try {
      const order = await prisma.order.create({
        data: {
          status,
          userId,
          packageId,
          totalValue,
          companions,
        },
      })

      return reply
        .status(201)
        .send({ message: 'Order registered successfully', order })
    } catch (error) {
      console.log(error)
    }
  })

  // route update order status
  app.patch('/orders/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const bodySchema = z.object({
      status: z.enum(['awaiting', 'refused', 'accept', 'canceled']),
    })

    const { status } = bodySchema.parse(request.body)

    try {
      const result = await prisma.order.update({
        where: {
          id,
        },
        data: {
          status,
        },
      })

      return reply.status(200).send({
        message: 'Order status updated successfully.',
        result,
      })
    } catch (error) {
      console.error('Error updating order status:', error)
      reply
        .status(500)
        .send({ error: 'An error occurred while updating the order status.' })
    }
  })

  // route list all orders per user
  app.get('/orders/:id', async (request, reply) => {
    const paramsRequest = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsRequest.parse(request.params)

    try {
      const result = await prisma.order.findMany({
        where: {
          userId: id,
        },
      })

      return result
    } catch (error) {
      console.error('Error get orders:', error)
      reply.status(500).send({ error: 'An error occurred while get orders.' })
    }
  })
}
