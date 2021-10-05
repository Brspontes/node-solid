import { CustomRequest } from '../helpers/customRequestHelper'
import { Request, Response } from 'express'
import RemessaLiquidacaoInput from '../models/inputs/remessaLiquidacaoInput'
import RemessaLiquidacao from '../models/entities/remessaLiquidacao'
import IRemessaLiquidacaoService from '../services/interfaces/iRemessaLiquidacao'
import { statusCodeHelper } from '../helpers/statusCodeHelper'
import RemessaLiquidacaoOutput from '../models/outputs/remessaLiquidacaoOutput'

class RemessaLiquidacaoController {
  constructor (private readonly liquidacaoService: IRemessaLiquidacaoService) { }

  ProcessarRemessa = async (req: CustomRequest<RemessaLiquidacaoInput>, res: Response): Promise<Response> => {
    const remessaInput = req.body
    const remessaLiquidacao = new RemessaLiquidacao(
      remessaInput.numeroControleParticipante,
      remessaInput.cnpj,
      remessaInput.valorNominal,
      remessaInput.valorLiquidacao)

    if (remessaLiquidacao.errors.length > 0) { res.status(statusCodeHelper.BAD_REQUEST).json(remessaLiquidacao.errors) }

    const retorno = await this.liquidacaoService.EnviarParaProcessamento(remessaLiquidacao)
    return res.status(statusCodeHelper.OK).json(retorno)
  }

  CancelarRemessa = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    const retorno = await this.liquidacaoService.CancelarRemessa(id)

    if (retorno.search('Erro') > -1) {
      return res.status(statusCodeHelper.BAD_REQUEST).send(retorno)
    }

    return res.status(statusCodeHelper.OK).send(retorno)
  }

  ObterRemessa = async (req: Request, res: Response): Promise<Response<RemessaLiquidacaoOutput>> => {
    const { id } = req.params

    if (id.length === 0) {
      return res.status(statusCodeHelper.BAD_REQUEST).send('O id deve ser enviado')
    }

    const retorno = await this.liquidacaoService.ObterRemessaPorId(id)
    return res.status(statusCodeHelper.OK).send(retorno)
  }
}

export default RemessaLiquidacaoController
