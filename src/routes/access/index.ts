import accessController from '@/controllers/access.controller'
import { Router } from 'express'

const accessRouter = Router()

accessRouter.post('/shop/signup', accessController.signUp)

export default accessRouter
