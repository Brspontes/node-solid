import RemessaLiquidacao from '../../models/entities/remessaLiquidacao'
import RemessaLiquidacaoOutput from '../../models/outputs/remessaLiquidacaoOutput'

export default interface IRemessaLiquidacaoService {
  EnviarParaProcessamento(remessaLiquidacao: RemessaLiquidacao): Promise<string>
  CancelarRemessa(idRemessa: string): Promise<string>
  ObterRemessaPorId(controleParticipante: string): Promise<RemessaLiquidacaoOutput>
}
