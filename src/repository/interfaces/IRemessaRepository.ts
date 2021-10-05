import RemessaLiquidacao from '../../models/entities/remessaLiquidacao'

export default interface IRemessaRepository {
  CriarRemessa (remessa: RemessaLiquidacao): Promise<string>
}
