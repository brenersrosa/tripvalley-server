import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import 'dotenv/config'
import fastify from 'fastify'

import { accommodationRoutes } from './routes/accommodation'
import { authRoutes } from './routes/auth'
import { itineraryRoutes } from './routes/itinerary'
import { orderRoutes } from './routes/order'
import { packageRoutes } from './routes/package'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: 'tripvalley',
})

app.register(authRoutes)
app.register(itineraryRoutes)
app.register(accommodationRoutes)
app.register(packageRoutes)
app.register(orderRoutes)

const port = Number(process.env.PORT)
app
  .listen({
    port,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log(`🚀 Server running on http://localhost:${port}`)
  })
