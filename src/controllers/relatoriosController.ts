import { Request, Response } from 'express'
import RelatorioEstoque from '../domain/entities/relatorioEstoque'
import RelatorioMovimentacaoEstoque from '../domain/entities/relatorioMovimentacao'
import IRelatorio from '../core/interfaces/services/iRelatorio'

class RelatorioController {
  constructor (private readonly relatorioService: IRelatorio) { }

  GerarRelatorioEstoque = (req: Request, res: Response): Response => {
    const relatorio = new RelatorioEstoque('Relatório Estoque')
    const retorno = this.relatorioService.GerarRelatorio(relatorio)
    return res.send(retorno)
  }

  GerarMovimentacaoEstoque = (req: Request, res: Response): Response => {
    const relatorio = new RelatorioMovimentacaoEstoque('Relatório Estoque')
    const retorno = this.relatorioService.GerarRelatorio(relatorio)
    return res.send(retorno)
  }
}

export default RelatorioController
