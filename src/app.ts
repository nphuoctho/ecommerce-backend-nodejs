import 'dotenv/config'
import 'tsconfig-paths/register'
import compression from 'compression'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import Database from './database/init.mongodb'
import router from './routes'

const app = express()

// init middlewares
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)

// init db
Database.getInstance()

// init routes
app.use('/', router)

// handling error

export default app
