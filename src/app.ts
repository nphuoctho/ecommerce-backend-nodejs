import 'dotenv/config'
import 'tsconfig-paths/register'
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
  return res.type('html').send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8"/>
        <title>eCommerce APIs</title>
      </head>
      <body>
        <h1>Welcome to API eCommerce Backend NodeJS 🚀</h1>
      </body>
    </html>
  `)
})

// handling error

export default app
