import { Client } from 'faunadb'
import { injectable } from 'inversify'

@injectable()
class FaunaDb {
  private fauna: Client

  createConnection = (): Client => {
    this.fauna = new Client({
      secret: process.env.FAUNADB
    })

    return this.fauna
  }

  closeConnection = (): void => {
    this.fauna.close()
  }
}

export default FaunaDb
