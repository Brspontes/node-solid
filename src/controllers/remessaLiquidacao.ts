import { CustomRequest } from './../helpers/customRequestHelper';
import { Response } from 'express'
import RemessaLiquidacaoInput from '../models/inputs/remessaLiquidacaoInput';

class RemessaLiquidacao {
  public async ProcessarRemessa(req: CustomRequest<RemessaLiquidacaoInput>, res: Response): Promise<Response> {

    const remessaInput = req.body

    

    return res.json(req.body)
  }
}

export default new RemessaLiquidacao()
