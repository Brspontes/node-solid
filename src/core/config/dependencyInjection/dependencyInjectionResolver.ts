import { Container } from 'inversify'
import { IRelatorioTypes, IRemessaLiquidacaoServiceTypes, IRemessaRepositoryTypes, FaunaDbTypes } from './dependecyInjectionConfig'
import IRemessaLiquidacaoService from '../../interfaces/services/iRemessaLiquidacao'
import RemessaLiquidacaoService from '../../../services/remessaLiquidacaoService'
import IRelatorio from '../../interfaces/services/iRelatorio'
import RelatorioService from '../../../services/relatorioService'
import IRemessaRepository from '../../interfaces/repository/IRemessaRepository'
import RemessaRepository from '../../../repository/remessaRepository'
import FaunaDb from '../db/fauna'

const container = new Container()

container.bind<IRemessaLiquidacaoService>(IRemessaLiquidacaoServiceTypes).to(RemessaLiquidacaoService)
container.bind<IRelatorio>(IRelatorioTypes).to(RelatorioService)
container.bind<IRemessaRepository>(IRemessaRepositoryTypes).to(RemessaRepository).inSingletonScope()
container.bind<FaunaDb>(FaunaDbTypes).to(FaunaDb).inTransientScope()

export { container }
