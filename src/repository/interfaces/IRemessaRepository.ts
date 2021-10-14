import RemessaLiquidacao from '../../domain/entities/remessaLiquidacao'
import RemessaLiquidacaoOutput from '../../domain/outputs/remessaLiquidacaoOutput'

export default interface IRemessaRepository {
  CriarRemessa (remessa: RemessaLiquidacao): Promise<string>
  CancelarRemessa (idRemessa: string): Promise<string>
  ObterRemessaPorId (numeroControleParticipante: string): Promise<RemessaLiquidacaoOutput>
  AtualizarValorResidual (idRemessa: string, remessaLiquidacao: RemessaLiquidacao): Promise<RemessaLiquidacaoOutput>
  ObterIdRemessa (numeroControleParticipante: string): Promise<string>
}
