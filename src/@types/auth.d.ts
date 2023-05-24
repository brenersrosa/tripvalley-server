import '@fastify/jwt'
import 'fastify'

declare module 'fastify' {
  interface FastifyInstance {
    authenticate: any
  }
}

declare module '@fastify/jwt' {
  interface FastifyJWT {
    user: {
      id: string
      name: string
      email: string
    }
  }
}
