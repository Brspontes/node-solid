import { Container } from "inversify";
import TYPES from "./dependecyInjectionConfig";
import IRemessaLiquidacaoService from '../../services/interfaces/iRemessaLiquidacao'
import RemessaLiquidacaoService from "../../services/remessaLiquidacaoService";
import IRelatorio from "../../services/interfaces/iRelatorio";
import RelatorioService from "../../services/relatorioService";

var container = new Container()

container.bind<IRemessaLiquidacaoService>(TYPES.IRemessaLiquidacaoService).to(RemessaLiquidacaoService)
container.bind<IRelatorio>(TYPES.IRelatorio).to(RelatorioService)

export default container
