import 'reflect-metadata'
import { inject, injectable } from 'inversify'
import remessaLiquidacao from '../models/entities/remessaLiquidacao'
import IRemessaLiquidacaoService from './interfaces/IRemessaLiquidacao'
import IRemessaRepository from '../repository/interfaces/IRemessaRepository'
import { IRemessaRepositoryTypes } from '../config/DependencyInjection/dependecyInjectionConfig'

@injectable()
export default class RemessaLiquidacaoService implements IRemessaLiquidacaoService {
  private readonly _remessaRepository: IRemessaRepository

  constructor (@inject(IRemessaRepositoryTypes) remessaRepository: IRemessaRepository) {
    this._remessaRepository = remessaRepository
  }

  EnviarParaProcessamento = async (remessaLiquidacao: remessaLiquidacao): Promise<string> => {
    return await this._remessaRepository.CriarRemessa(remessaLiquidacao)
  }

  CancelarRemessa (idRemessa: string): string {
    return `Remessa ${idRemessa} Cancelada Com Sucesso`
  }
}
