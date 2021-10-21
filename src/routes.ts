import * as TYPES from './core/config/dependencyInjection/dependecyInjectionConfig'
import { Router } from 'express'
import { container } from './core/config/dependencyInjection/dependencyInjectionResolver'
import RemessaLiquidacaoController from './controllers/remessaLiquidacaoController'
import IRemessaLiquidacaoService from './core/interfaces/services/iRemessaLiquidacao'
import IRelatorio from './core/interfaces/services/iRelatorio'
import RelatorioController from './controllers/relatoriosController'

const liquidacaoService = container.get<IRemessaLiquidacaoService>(TYPES.IRemessaLiquidacaoServiceTypes)
const relatorioService = container.get<IRelatorio>(TYPES.IRelatorioTypes)

const remessaController = new RemessaLiquidacaoController(liquidacaoService)
const relatorioController = new RelatorioController(relatorioService)

const routes = Router()

routes.post('/remessa/processar', remessaController.ProcessarRemessa)
routes.post('/remessa/atualizar', remessaController.AtualizarValoresRemessa)
routes.delete('/remessa/cancelar/:id', remessaController.CancelarRemessa)
routes.get('/remessa/obterporid/:id', remessaController.ObterRemessa)

routes.get('/relatorio/estoque', relatorioController.GerarRelatorioEstoque)
routes.get('/relatorio/movimentacao', relatorioController.GerarMovimentacaoEstoque)

export default routes
