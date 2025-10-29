import { RoleShop } from '@/types/auth.types'
import { Document, model, Schema } from 'mongoose'

const DOCUMENT_NAME = 'Shop'
const COLLECTION_NAME = 'Shops'

enum ShopStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive'
}

interface ShopDocument extends Document {
  name: string
  email: string
  password: string
  status: ShopStatus | string
  verify: boolean
  roles: RoleShop[]
}

const shopSchema = new Schema<ShopDocument>(
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
      enum: Object.values(RoleShop),
      default: [RoleShop.SHOP]
    }
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME
  }
)

const shopModel = model<ShopDocument>(DOCUMENT_NAME, shopSchema)

export default shopModel
