import { model, Schema } from 'mongoose'

const DOCUMENT_NAME = 'Shop'
const COLLECTION_NAME = 'Shops'

enum IShopStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive'
}

interface IShop extends Document {
  name: string
  email: string
  password: string
  status: IShopStatus | string
  verify: boolean
  roles: string[]
}

const shopSchema = new Schema<IShop>(
  {
    name: {
      type: String,
      trim: true,
      maxLength: 150
    },
    email: {
      type: String,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'inactive'
    },
    verify: {
      type: Boolean,
      default: true
    },
    roles: {
      type: [String],
      default: []
    }
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME
  }
)

const ShopModel = model<IShop>(DOCUMENT_NAME, shopSchema)

export default ShopModel
