import 'reflect-metadata'
import { inject, injectable } from 'inversify'
import remessaLiquidacao from '../domain/entities/remessaLiquidacao'
import IRemessaLiquidacaoService from './interfaces/IRemessaLiquidacao'
import IRemessaRepository from '../repository/interfaces/IRemessaRepository'
import { IRemessaRepositoryTypes } from '../config/dependencyInjection/dependecyInjectionConfig'
import remessaLiquidacaoOutput from '../domain/outputs/remessaLiquidacaoOutput'
@injectable()
export default class RemessaLiquidacaoService implements IRemessaLiquidacaoService {
  private readonly _remessaRepository: IRemessaRepository

  constructor (@inject(IRemessaRepositoryTypes) remessaRepository: IRemessaRepository) {
    this._remessaRepository = remessaRepository
  }

  AtualizarValorResidual = async (controleParticipante: string, valorNominal: number, valorLiquidacao: number): Promise<remessaLiquidacaoOutput> => {
    let remessa = new remessaLiquidacaoOutput()

    if (valorLiquidacao > valorNominal) {
      remessa.errors.push('Valor liquidação não pode ser maior que o valor nominal')
      return remessa
    }

    remessa = await this._remessaRepository.ObterRemessaPorId(controleParticipante)
    if (!remessa) {
      remessa.errors.push('Valor liquidação não pode ser maior que o valor nominal')
      return remessa
    }
    const atualizarRemessa = new remessaLiquidacao(remessa.numeroControleParticipante, remessa.cnpj, remessa.valorNominal, remessa.valorLiquidacao)
    atualizarRemessa.AtualizarValorResidual(valorNominal, valorLiquidacao)

    const retorno = this._remessaRepository.AtualizarValorResidual(atualizarRemessa)
    return retorno
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
