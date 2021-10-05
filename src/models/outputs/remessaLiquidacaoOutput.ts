export default class RemessaLiquidacaoOutput {
  constructor () {}

  public _numeroControleParticipante : string
  public _cnpj: string
  public _valorNominal : number
  public _valorLiquidacao : number
  public _errors: string[] = []
}
