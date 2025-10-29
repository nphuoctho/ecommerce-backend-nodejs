import keyTokenModel from '@/models/keyToken.model'

class KeyTokenService {
  static createKeyToken = async ({ userId, publicKey }: { userId: string; publicKey: string }) => {
    try {
      const publicKeyString = publicKey.toString()

      const tokens = await keyTokenModel.create({ user: userId, publicKey: publicKeyString })

      return tokens ? publicKeyString : null
    } catch (error) {
      console.log('🚀 ~ KeyTokenService ~ error:', error)

      return null
    }
  }
}

export default KeyTokenService
