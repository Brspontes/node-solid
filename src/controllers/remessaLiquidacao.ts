import { CustomRequest } from './../helpers/customRequestHelper'
import { Response } from 'express'
import RemessaLiquidacaoInput from '../models/inputs/remessaLiquidacaoInput'
import RemessaLiquidacao from '../models/entities/remessaLiquidacao'
import container from '../config/DependencyInjection/dependencyInjectionResolver'
import TYPES from '../config/DependencyInjection/dependecyInjectionConfig'
import IRemessaLiquidacaoService from '../services/interfaces/iRemessaLiquidacao'

class RemessaLiquidacaoController {
  public async ProcessarRemessa(req: CustomRequest<RemessaLiquidacaoInput>, res: Response): Promise<Response> {

    const remessaInput = req.body

    const remessaLiquidacao = new RemessaLiquidacao()
    
    remessaLiquidacao.CriarRemessa(
      remessaInput.numeroControleParticipante,
      remessaInput.cnpj,
      remessaInput.valorNominal,
      remessaInput.valorLiquidacao
    )

    const processarRemessa = container.get<IRemessaLiquidacaoService>(TYPES.IRemessaLiquidacaoService)
    const retorno = processarRemessa.EnviarParaProcessamento(remessaLiquidacao)

    return res.json(retorno)
  }
}

export default new RemessaLiquidacaoController()
