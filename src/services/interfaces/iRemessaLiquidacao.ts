import RemessaLiquidacao from '../../models/entities/remessaLiquidacao'

export default interface IRemessaLiquidacaoService {
  EnviarParaProcessamento(remessaLiquidacao: RemessaLiquidacao): string
  CancelarRemessa(idRemessa: string): string
}
