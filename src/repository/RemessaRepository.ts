import { query as q } from 'faunadb'
import { inject, injectable } from 'inversify'
import { FaunaDbTypes } from '../config/DependencyInjection/dependecyInjectionConfig'
import remessaLiquidacao from '../models/entities/remessaLiquidacao'
import IRemessaRepository from './interfaces/IRemessaRepository'
import FaunaDb from '../config/db/fauna'

@injectable()
export default class RemessaRepository implements IRemessaRepository {
  constructor (@inject(FaunaDbTypes) private readonly fauna: FaunaDb) { }

  CriarRemessa = async (remessa: remessaLiquidacao): Promise<string> => {
    try {
      await this.fauna.createConnection().query(
        q.Create(
          q.Collection('remessa'),
          { data: remessa }
        )
      )
    } catch (error) {
      return `Erro ao criar remessa: ${error.message}`
    }
    return 'Remessa criada com sucesso'
  }
}
