import { query as q } from 'faunadb'
import { inject, injectable } from 'inversify'
import { FaunaDbTypes } from '../config/dependencyInjection/dependecyInjectionConfig'
import IRemessaRepository from './interfaces/IRemessaRepository'
import FaunaDb from '../config/db/fauna'
import RemessaLiquidacao from '../models/entities/remessaLiquidacao'
import RemessaLiquidacaoOutput from '../models/outputs/remessaLiquidacaoOutput'

type Reference = {
  ref: {
    id: string
  }
}

@injectable()
export default class RemessaRepository implements IRemessaRepository {
  constructor (@inject(FaunaDbTypes) private readonly fauna: FaunaDb) { }
  CancelarRemessa = async (idRemessa: string): Promise<string> => {
    try {
      const reference = await this.fauna.createConnection().query<Reference>(
        q.Get(
          q.Match(
            q.Index('controle_participante'),
            idRemessa
          )
        )
      )

      if (reference?.ref?.id) {
        return `Bão foi possível localizar a remessa: ${idRemessa} `
      }

      await this.fauna.createConnection().query(
        q.Delete(
          q.Ref(
            q.Collection('remessa'),
            reference.ref.id
          )
        )
      )
      return `Remessa ${idRemessa} cancelada com sucesso`
    } catch (error) {
      return 'Houve um erro ao cancelar a remessa'
    }
  }

  ObterRemessaPorId = async (numeroControleParticipante: string): Promise<RemessaLiquidacaoOutput> => {
    try {
      const remessa = await this.fauna.createConnection().query<RemessaLiquidacaoOutput>(
        q.Get(
          q.Match(
            q.Index('controle_participante'),
            numeroControleParticipante
          )
        )
      )
      return remessa
    } catch (error) {
      const remessa = new RemessaLiquidacaoOutput()
      remessa._errors.push(`Não foi possível obter a remessa: ${error.message}`)
      return remessa
    }
  }

  CriarRemessa = async (remessa: RemessaLiquidacao): Promise<string> => {
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
