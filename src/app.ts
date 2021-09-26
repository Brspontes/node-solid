import express, { application } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './routes'

class App {
  public express: express.Application

  public constructor() {
    this.express = express()
    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares(): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database(): void {
    mongoose.connect('mongodb+srv://mongo-dev:28a6e887-ff57-4002-858b-dbdbdf8b585e@dev-study.tjwvl.mongodb.net/dev-database?retryWrites=true&w=majority')
  }

  private routes(): void {
    this.express.use(routes)
  }
}

export default new App().express
