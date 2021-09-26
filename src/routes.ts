import { Router } from 'express'
import RemessaLiquidacao from './controllers/remessaLiquidacao'

// importar controller

const routes = Router()

routes.post('/remessa/processar', RemessaLiquidacao.ProcessarRemessa)

export default routes
