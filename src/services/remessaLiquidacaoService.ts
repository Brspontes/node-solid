import 'reflect-metadata'
import { inject, injectable } from 'inversify'
import remessaLiquidacao from '../models/entities/remessaLiquidacao'
import IRemessaLiquidacaoService from './interfaces/IRemessaLiquidacao'
import IRemessaRepository from '../repository/interfaces/IRemessaRepository'
import { IRemessaRepositoryTypes } from '../config/dependencyInjection/dependecyInjectionConfig'
import remessaLiquidacaoOutput from '../models/outputs/remessaLiquidacaoOutput'
@injectable()
export default class RemessaLiquidacaoService implements IRemessaLiquidacaoService {
  private readonly _remessaRepository: IRemessaRepository

  constructor (@inject(IRemessaRepositoryTypes) remessaRepository: IRemessaRepository) {
    this._remessaRepository = remessaRepository
  }

  ObterRemessaPorId = async (controleParticipante: string): Promise<remessaLiquidacaoOutput> => {
    return await this._remessaRepository.ObterRemessaPorId(controleParticipante)
  }

  EnviarParaProcessamento = async (remessaLiquidacao: remessaLiquidacao): Promise<string> => {
    return await this._remessaRepository.CriarRemessa(remessaLiquidacao)
  }

  CancelarRemessa = async (idRemessa: string): Promise<string> => {
    return this._remessaRepository.CancelarRemessa(idRemessa)
  }
}
