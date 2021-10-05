import RemessaLiquidacao from '../../models/entities/remessaLiquidacao'

export default interface IRemessaLiquidacaoService {
  EnviarParaProcessamento(remessaLiquidacao: RemessaLiquidacao): Promise<string>
  CancelarRemessa(idRemessa: string): string
}
