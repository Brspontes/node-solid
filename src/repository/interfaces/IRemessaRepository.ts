import RemessaLiquidacao from '../../models/entities/remessaLiquidacao'
import RemessaLiquidacaoOutput from '../../models/outputs/remessaLiquidacaoOutput'

export default interface IRemessaRepository {
  CriarRemessa (remessa: RemessaLiquidacao): Promise<string>
  CancelarRemessa (idRemessa: string): Promise<string>
  ObterRemessaPorId (numeroControleParticipante: string): Promise<RemessaLiquidacaoOutput>
}
