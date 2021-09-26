import { CustomRequest } from './../helpers/customRequestHelper'
import { Response } from 'express'
import RemessaLiquidacaoInput from '../models/inputs/remessaLiquidacaoInput'
import RemessaLiquidacao from '../models/entities/remessaLiquidacao'

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

    return res.json(remessaLiquidacao)
  }
}

export default new RemessaLiquidacaoController()
