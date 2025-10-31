import apiKeyModel, { APIKeyPermissions } from '@/models/apiKey.model'
import crypto from 'crypto'

const findById = async (key: string) => {
  // const apiKey = await apiKeyModel.create({
  //   key: crypto.randomBytes(64).toString('hex'),
  //   permissions: [APIKeyPermissions.READ]
  // })
  // console.log('🚀 ~ findById ~ apiKey:', apiKey)

  const objKey = await apiKeyModel.findOne({ key, status: true }).lean()

  return objKey
}

export { findById }
