import { Router } from 'express'
import accessRouter from './access'

const router = Router()

router.use('/v1/api', accessRouter)

router.get('/', (_, res) => {
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

export default router
