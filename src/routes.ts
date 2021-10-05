import * as TYPES from './config/DependencyInjection/dependecyInjectionConfig'
import { Router } from 'express'
import { container } from './config/DependencyInjection/dependencyInjectionResolver'
import RemessaLiquidacaoController from './controllers/remessaLiquidacaoController'
import IRemessaLiquidacaoService from './services/interfaces/iRemessaLiquidacao'
import IRelatorio from './services/interfaces/iRelatorio'
import RelatorioController from './controllers/relatoriosController'

const liquidacaoService = container.get<IRemessaLiquidacaoService>(TYPES.IRemessaLiquidacaoServiceTypes)
const relatorioService = container.get<IRelatorio>(TYPES.IRelatorioTypes)

const remessaController = new RemessaLiquidacaoController(liquidacaoService)
const relatorioController = new RelatorioController(relatorioService)

const routes = Router()

routes.post('/remessa/processar', remessaController.ProcessarRemessa)
routes.delete('/remessa/cancelar/:id', remessaController.CancelarRemessa)

routes.get('/relatorio/estoque', relatorioController.GerarRelatorioEstoque)
routes.get('/relatorio/movimentacao', relatorioController.GerarMovimentacaoEstoque)

export default routes
