import RemessaLiquidacao from '../../domain/entities/remessaLiquidacao'
import RemessaLiquidacaoOutput from '../../domain/outputs/remessaLiquidacaoOutput'

export default interface IRemessaLiquidacaoService {
  EnviarParaProcessamento(remessaLiquidacao: RemessaLiquidacao): Promise<string>
  CancelarRemessa(idRemessa: string): Promise<string>
  ObterRemessaPorId(controleParticipante: string): Promise<RemessaLiquidacaoOutput>
}
