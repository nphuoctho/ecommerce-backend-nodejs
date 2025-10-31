import { Document, model, Schema } from 'mongoose'

const DOCUMENT_NAME = 'Apikey'
const COLLECTION_NAME = 'Apikeys'

export enum APIKeyPermissions {
  READ = '0000',
  WRITE = '1111',
  FULL_ACCESS = '2222'
}

interface ApiKeyDocument extends Document {
  key: string
  status: boolean
  permissions: APIKeyPermissions[]
}

const apiKeySchema = new Schema<ApiKeyDocument>(
  {
    key: {
      type: String,
      required: true,
      unique: true
    },
    status: {
      type: Boolean,
      default: true
    },
    permissions: {
      type: [String],
      required: true,
      enum: Object.values(APIKeyPermissions)
    }
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME
  }
)

const apiKeyModel = model<ApiKeyDocument>(DOCUMENT_NAME, apiKeySchema)

export default apiKeyModel
