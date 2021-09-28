export default class RemessaLiquidacao {

  private _numeroControleParticipante: string
  private _cnpj: string
  private _valorNominal: number;
  private _valorLiquidacao: number;
  private _errors: string[] = []

  public get cnpj(): string {
    return this._cnpj;
  }

  public get numeroControleParticipante(): string {
    return this._numeroControleParticipante;
  }

  public get valorNominal(): number {
    return this._valorNominal;
  }

  public get valorPresente(): number {
    return this._valorLiquidacao;
  }

  public get errors(): string[] {
    return this._errors;
  }

  public CriarRemessa(
    numeroControleParticipante: string,
    cnpj: string,
    valorNominal: number,
    valorLiquidacao: number): void {

    if (!cnpj)
      this._errors.push('CNPJ é obrigatório')
    else
      this._cnpj = cnpj

    if (!numeroControleParticipante)
      this._errors.push('Numero controle participante é obrigatório')
    else
      this._numeroControleParticipante = numeroControleParticipante

    if (!valorNominal)
      this._errors.push('Valor nominal é obrigatório')
    else
      this._valorNominal = valorNominal  

    if (!valorLiquidacao)
      this._errors.push('Valor liquidação é obrigatório')
    else
      this._valorLiquidacao = valorLiquidacao
    
  }
}
