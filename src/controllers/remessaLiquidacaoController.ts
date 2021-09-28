import { CustomRequest } from '../helpers/customRequestHelper'
import { Response } from 'express'
import RemessaLiquidacaoInput from '../models/inputs/remessaLiquidacaoInput'
import RemessaLiquidacao from '../models/entities/remessaLiquidacao'
import IRemessaLiquidacaoService from '../services/interfaces/iRemessaLiquidacao'
import { statusCodeHelper } from '../helpers/statusCodeHelper'

class RemessaLiquidacaoController {

  constructor (private readonly liquidacaoService: IRemessaLiquidacaoService) { }

  ProcessarRemessa = async (req: CustomRequest<RemessaLiquidacaoInput>, res: Response) => {

    const remessaInput = req.body
    const remessaLiquidacao = new RemessaLiquidacao()
    
    remessaLiquidacao.CriarRemessa(
      remessaInput.numeroControleParticipante,
      remessaInput.cnpj,
      remessaInput.valorNominal,
      remessaInput.valorLiquidacao
    )

    if (remessaLiquidacao.errors.length > 0)
      res.status(statusCodeHelper.BAD_REQUEST).json(remessaLiquidacao.errors)

    const retorno = this.liquidacaoService.EnviarParaProcessamento(remessaLiquidacao)
    res.status(statusCodeHelper.OK).json(retorno)
  }
}

export default RemessaLiquidacaoController
