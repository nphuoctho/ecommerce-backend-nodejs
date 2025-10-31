import keyTokenModel from '@/models/keyToken.model'

class KeyTokenService {
  static createKeyToken = async ({
    userId,
    publicKey,
    privateKey
  }: {
    userId: string
    publicKey: string
    privateKey: string
  }) => {
    try {
      const tokens = await keyTokenModel.create({
        user: userId,
        publicKey,
        privateKey
      })

      return tokens ? tokens.publicKey : null
    } catch (error) {
      console.log('🚀 ~ KeyTokenService ~ error:', error)

      return null
    }
  }
}

export default KeyTokenService
