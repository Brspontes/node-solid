export default class RemessaLiquidacaoOutput {
  constructor () {}

  public numeroControleParticipante : string
  public cnpj: string
  public valorNominal : number
  public valorLiquidacao : number
  public errors: string[] = []
}
