import { Document, model, Schema } from 'mongoose'

const DOCUMENT_NAME = 'Key'
const COLLECTION_NAME = 'Keys'

export interface KeyTokenDocument extends Document {
  user: Schema.Types.ObjectId
  publicKey: string
  privateKey: string
  refreshToken: string[]
}

const keyTokenSchema = new Schema<KeyTokenDocument>(
  {
    user: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: 'Shop'
    },
    publicKey: {
      type: String,
      require: true
    },
    privateKey: {
      type: String,
      required: true
    },
    refreshToken: {
      type: [String],
      default: []
    }
  },
  {
    collection: COLLECTION_NAME,
    timestamps: true
  }
)

const keyTokenModel = model<KeyTokenDocument>(DOCUMENT_NAME, keyTokenSchema)

export default keyTokenModel
