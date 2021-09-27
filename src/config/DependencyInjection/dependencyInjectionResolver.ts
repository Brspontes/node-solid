import { Container } from "inversify";
import TYPES from "./dependecyInjectionConfig";
import IRemessaLiquidacaoService from '../../services/interfaces/iRemessaLiquidacao'
import RemessaLiquidacaoService from "../../services/remessaLiquidacaoService";

var container = new Container()

container.bind<IRemessaLiquidacaoService>(TYPES.IRemessaLiquidacaoService).to(RemessaLiquidacaoService)

export default container
