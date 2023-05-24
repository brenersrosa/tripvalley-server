import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import 'dotenv/config'
import fastify from 'fastify'

import { authRoutes } from './routes/auth'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: 'tripvalley',
})

app.register(authRoutes)

const port = Number(process.env.PORT)
app
  .listen({
    port,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log(`🚀 Server running on http://localhost:${port}`)
  })
