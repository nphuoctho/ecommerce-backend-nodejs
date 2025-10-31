import jwt from 'jsonwebtoken'

const createTokenPair = async (payload: string | Buffer | object, publicKey: string, privateKey: string) => {
  try {
    // Access Token
    const accessToken = await jwt.sign(payload, publicKey, {
      expiresIn: '2 days'
    })

    const refreshToken = await jwt.sign(payload, privateKey, {
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
