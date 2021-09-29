import { Request, Response } from 'express'
import RelatorioEstoque from '../models/entities/relatorioEstoque'
import RelatorioMovimentacaoEstoque from '../models/entities/relatorioMovimentacao'
import IRelatorio from '../services/interfaces/iRelatorio'

class RelatorioController {
  constructor (private readonly relatorioService: IRelatorio) { }

  GerarRelatorioEstoque = (req: Request, res: Response): Response => {
    const relatorio = new RelatorioEstoque('82c0958a-738d-4d8e-a16f-3b7df627438d', 'Relatório Estoque')
    const retorno = this.relatorioService.GerarRelatorio(relatorio)
    return res.send(retorno)
  }

  GerarMovimentacaoEstoque = (req: Request, res: Response): Response => {
    const relatorio = new RelatorioMovimentacaoEstoque('33a853a8-1806-47cf-a909-2f6a96c0e452', 'Relatório Estoque')
    const retorno = this.relatorioService.GerarRelatorio(relatorio)
    return res.send(retorno)
  }
}

export default RelatorioController
