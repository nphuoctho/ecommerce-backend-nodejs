import 'dotenv/config'
import compression from 'compression'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import Database from './database/init.mongodb'

const app = express()

// init middlewares
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())

// init db
Database.getInstance()

// init routes
app.get('/', (_, res) => {
  return res.status(200).json({
    message: 'Welcome to API eCommerce Backend NodeJS'
  })
})

// handling error

export default app
