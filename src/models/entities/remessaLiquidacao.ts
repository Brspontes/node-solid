export default class RemessaLiquidacao {
 
  private _numeroControleParticipante : string
  private _cnpj: string
  private _valorNominal : number;
  private _valorLiquidacao : number;

  public get cnpj() : string {
    return this._cnpj;
  }

  public get numeroControleParticipante() : string {
    return this._numeroControleParticipante;
  }

  public get valorNominal() : number {
    return this._valorNominal;
  }

  public get valorPresente() : number {
    return this._valorLiquidacao;
  }
  
  public CriarRemessa(
    numeroControleParticipante: string, 
    cnpj: string,
    valorNominal: number,
    valorLiquidacao: number): void {
    
    this._numeroControleParticipante = numeroControleParticipante
    this._cnpj = cnpj
    this._valorLiquidacao = valorLiquidacao
    this._valorNominal = valorNominal
  }
}
