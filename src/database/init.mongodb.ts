import { countConnect } from '@/helpers/check.connect'
import mongoose from 'mongoose'

export default class Database {
  private static instance: Database | null = null
  private readonly mongoUri: string = process.env.MONGO_URI ?? ''

  constructor() {
    this.connect()
  }

  connect(type: string = 'mongodb') {
    if (1 === 1) {
      mongoose.set('debug', true)
      mongoose.set('debug', { color: true })
    }

    mongoose
      .connect(this.mongoUri)
      .then(() => {
        console.log('Connected MongoDB Success', countConnect())
      })
      .catch((err) => console.log(`Error Connect ${err}`))
  }

  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database()
    }

    return Database.instance
  }
}
