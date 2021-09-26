import remessaLiquidacao from "../models/entities/remessaLiquidacao";
import IRemessaLiquidacaoService from "./interfaces/IRemessaLiquidacao";

export default class RemessaLiquidacaoService implements IRemessaLiquidacaoService {
  EnviarParaProcessamento(remessaLiquidacao: remessaLiquidacao): string {
    return "Remessa enviada Com Sucesso"
  }
}
