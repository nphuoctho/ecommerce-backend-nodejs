import { APIKeyPermissions } from '@/models/apiKey.model'
import { findById } from '@/services/apikey.service'
import { Header } from '@/types/auth.types'
import { Request, Response, NextFunction, RequestHandler } from 'express'

interface ApiKeyReq extends Request {
  objKey?: {
    permissions: APIKeyPermissions[]
  }
}

export const apiKey: RequestHandler = async (req: ApiKeyReq, res: Response, next: NextFunction): Promise<void> => {
  try {
    const key = req.headers[Header.API_KEY]?.toString()

    if (!key) {
      res.status(403).json({
        message: 'Forbidden Error'
      })
      return
    }

    // Check Object Key
    const objKey = await findById(key)
    if (!objKey) {
      res.status(403).json({
        message: 'Forbidden Error'
      })
      return
    }

    req.objKey = objKey

    return next()
  } catch (error) {
    console.log('🚀 ~ apiKey ~ error:', error)
    next(error)
  }
}

export const checkPermission = (permission: APIKeyPermissions): RequestHandler => {
  return (req: ApiKeyReq, res: Response, next: NextFunction): void => {
    const permissions = req.objKey?.permissions

    if (!permission || !permissions?.includes(permission)) {
      res.status(403).json({
        message: 'Permission Denied'
      })
      return
    }

    return next()
  }
}
