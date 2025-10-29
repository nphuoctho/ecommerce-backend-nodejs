import { KeyObject } from 'crypto'
import jwt from 'jsonwebtoken'

const createTokenPair = async (payload: string | Buffer | object, publicKey: KeyObject, privateKey: string) => {
  try {
    // Access Token
    const accessToken = await jwt.sign(payload, privateKey, {
      algorithm: 'RS256',
      expiresIn: '2 days'
    })

    const refreshToken = await jwt.sign(payload, privateKey, {
      algorithm: 'RS256',
      expiresIn: '7 days'
    })

    jwt.verify(accessToken, publicKey, (err, decode) => {
      if (err) console.log('Error Verify::', err)
      else console.log('Decode Verify::', decode)
    })

    return { accessToken, refreshToken }
  } catch (error) {
    console.log('🚀 ~ createTokenPair ~ error:', error)
    return null
  }
}

export { createTokenPair }
