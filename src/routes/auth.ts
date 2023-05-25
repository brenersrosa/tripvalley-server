import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { hashPassword, verifyPassword } from '../lib/hashPassword'
import { prisma } from '../lib/prisma'

export async function authRoutes(app: FastifyInstance) {
  // route create user
  app.post('/register', async (request, reply) => {
    const bodySchema = z
      .object({
        name: z.string(),
        email: z.string().email(),
        password: z.string(),
        passwordConfirmation: z.string({ required_error: 'Field is required' }),
        role_id: z.string().uuid(),
      })
      .refine((data) => data.password === data.passwordConfirmation, {
        message: `Password confirmation doesn't match password`,
        path: ['passwordConfirmation'],
      })

    const { name, email, password, role_id } = bodySchema.parse(request.body)

    const { hash, salt } = hashPassword(password)

    try {
      let user = await prisma.user.findUnique({
        where: { email },
      })

      if (user) {
        return reply
          .status(500)
          .send({ message: 'User already registered with this email address' })
      }

      user = await prisma.user.create({
        data: { name, email, password: hash, salt, role_id },
      })

      return reply.status(201).send({ message: 'User created with success' })
    } catch (error) {
      console.log(error)
    }
  })

  // route login user
  app.post('/signin', async (request, reply) => {
    const bodySchema = z.object({
      email: z.string().email(),
      password: z.string(),
    })

    const { email, password } = bodySchema.parse(request.body)

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (!user) {
      return reply.status(400).send({
        message: 'User not registered with this email',
      })
    }

    const correctPassword = verifyPassword({
      candidatePassword: password,
      hash: user.password,
      salt: user.salt,
    })

    if (correctPassword) {
      const { password, salt, ...rest } = user
      const accessToken = app.jwt.sign(rest, { expiresIn: '7d' })

      return reply.status(200).send({
        user: {
          name: user.name,
          email: user.email,
        },
        accessToken,
      })
    }

    return reply.status(400).send({
      message: 'E-mail ou senha inválidos.',
    })
  })

  // route get all users
  app.get('/users', async (request) => {
    const users = await prisma.user.findMany()

    return users
  })

  // route get user by id
  app.get('/users/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const user = await prisma.user.findFirstOrThrow({
      where: {
        id,
      },
    })

    return user
  })
}
