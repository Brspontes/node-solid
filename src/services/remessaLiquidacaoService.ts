import "reflect-metadata";
import { injectable } from "inversify";
import remessaLiquidacao from "../models/entities/remessaLiquidacao";
import IRemessaLiquidacaoService from "./interfaces/IRemessaLiquidacao";

@injectable()
export default class RemessaLiquidacaoService implements IRemessaLiquidacaoService {
  EnviarParaProcessamento(remessaLiquidacao: remessaLiquidacao): string {
    return 'Remessa enviada Com Sucesso'
  }

  CancelarRemessa(idRemessa: string): string {
    return `Remessa ${idRemessa} Cancelada Com Sucesso`
  }
}
