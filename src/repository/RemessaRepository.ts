import { query as q } from 'faunadb'
import { inject, injectable } from 'inversify'
import { FaunaDbTypes } from '../config/dependencyInjection/dependecyInjectionConfig'
import IRemessaRepository from './interfaces/IRemessaRepository'
import FaunaDb from '../config/db/fauna'
import RemessaLiquidacao from '../domain/entities/remessaLiquidacao'
import RemessaLiquidacaoOutput from '../domain/outputs/remessaLiquidacaoOutput'

type Reference = {
  ref: {
    id: string
  },
  data: {
    _cnpj: string
    _numeroControleParticipante: string,
    _valorNominal: number,
    _valorLiquidacao: number
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

      if (!reference?.ref?.id) {
        return `Erro: Não foi possível localizar a remessa: ${idRemessa} `
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
      return 'Erro: Houve um erro ao cancelar a remessa'
    }
  }

  ObterRemessaPorId = async (numeroControleParticipante: string): Promise<RemessaLiquidacaoOutput> => {
    try {
      const remessaOutput: RemessaLiquidacaoOutput = new RemessaLiquidacaoOutput()
      await this.fauna.createConnection().query<Reference>(
        q.Get(
          q.Match(
            q.Index('controle_participante'),
            numeroControleParticipante
          )
        )
      ).then(remessa => {
        remessaOutput.cnpj = remessa.data._cnpj
        remessaOutput.numeroControleParticipante = remessa.data._numeroControleParticipante
        remessaOutput.valorLiquidacao = remessa.data._valorLiquidacao
        remessaOutput.valorNominal = remessa.data._valorNominal
      })

      return remessaOutput
    } catch (error) {
      const remessa = new RemessaLiquidacaoOutput()
      remessa.errors.push(`Não foi possível obter a remessa: ${error.message}`)
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
