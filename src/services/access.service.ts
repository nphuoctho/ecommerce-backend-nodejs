import bcrypt from 'bcrypt'
import crypto from 'crypto'
import shopModel from '@/models/shop.model'
import { RoleShop, SignUpPayload } from '@/types/auth.types'
import KeyTokenService from './keyToken.service'
import { createTokenPair } from '@/auth/authUtils'
import { getInfoData } from '@/utils'

class AccessService {
  static signUp = async ({ name, email, password }: SignUpPayload) => {
    try {
      const holdShop = await shopModel.findOne({ email }).lean()

      if (holdShop)
        return {
          code: 400,
          message: 'Shop with this email already exists'
        }

      const passwordHash = await bcrypt.hash(password, 10)

      const newShop = await shopModel.create({ name, email, password: passwordHash, roles: [RoleShop.SHOP] })

      if (newShop) {
        // Create privateKey and publicKey
        const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
          modulusLength: 4096,
          publicKeyEncoding: {
            type: 'pkcs1',
            format: 'pem'
          },
          privateKeyEncoding: {
            type: 'pkcs1',
            format: 'pem'
          }
        })

        const publicKeyString = await KeyTokenService.createKeyToken({
          userId: newShop._id as string,
          publicKey
        })

        if (!publicKeyString)
          return {
            code: 400,
            message: 'Public key string error'
          }

        const publicKeyObject = crypto.createPublicKey(publicKey)

        const tokens = await createTokenPair({ userId: newShop._id, email }, publicKeyObject, privateKey)

        return {
          code: 201,
          metdata: {
            shop: getInfoData({ fields: ['_id', 'name', 'email'], object: newShop }),
            tokens
          }
        }
      }

      return {
        code: 200,
        metdate: null
      }
    } catch (error) {
      console.log('🚀 ~ AccessService ~ error:', error)
    }
  }
}

export default AccessService
