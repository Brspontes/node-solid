import { Router } from 'express'
import container from './config/DependencyInjection/dependencyInjectionResolver'
import TYPES from './config/DependencyInjection/dependecyInjectionConfig'
import RemessaLiquidacaoController from './controllers/remessaLiquidacaoController'
import IRemessaLiquidacaoService from './services/interfaces/iRemessaLiquidacao'

const liquidacaoService = container.get<IRemessaLiquidacaoService>(TYPES.IRemessaLiquidacaoService)
const routes = Router()

routes.post('/remessa/processar', new RemessaLiquidacaoController(liquidacaoService).ProcessarRemessa)

export default routes
