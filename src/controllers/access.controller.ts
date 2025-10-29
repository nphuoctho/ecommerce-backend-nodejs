import AccessService from '@/services/access.service'
import { Request, Response, NextFunction } from 'express'

class AccessController {
  signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('🚀 ~ AccessController ~ req::Body:', req.body)

      return res.status(201).json(await AccessService.signUp(req.body))
    } catch (error) {
      next(error)
    }
  }
}

const accessController = new AccessController()

export default accessController
