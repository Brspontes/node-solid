import { Router } from 'express'
import RemessaLiquidacaoController from './controllers/remessaLiquidacao'

// importar controller

const routes = Router()

routes.post('/remessa/processar', RemessaLiquidacaoController.ProcessarRemessa)

export default routes
