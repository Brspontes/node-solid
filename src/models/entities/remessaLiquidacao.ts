export default class RemessaLiquidacao {
  private _numeroControleParticipante: string
  private _cnpj: string
  private _valorNominal: number
  private _valorLiquidacao: number
  private _errors: string[] = []

  constructor (
    numeroControleParticipante: string,
    cnpj: string,
    valorNominal: number,
    valorLiquidacao: number) {
    this._cnpj = cnpj
    this._numeroControleParticipante = numeroControleParticipante
    this._valorNominal = valorNominal
    this._valorLiquidacao = valorLiquidacao

    this.ValidaRemessa()
  }

  public get cnpj (): string {
    return this._cnpj
  }

  public get numeroControleParticipante (): string {
    return this._numeroControleParticipante
  }

  public get valorNominal (): number {
    return this._valorNominal
  }

  public get valorPresente (): number {
    return this._valorLiquidacao
  }

  public get errors (): string[] {
    return this._errors
  }

  public ValidaRemessa (): void {
    if (!this._cnpj) { this._errors.push('CNPJ é obrigatório') }

    if (!this._numeroControleParticipante) { this._errors.push('Numero controle participante é obrigatório') }

    if (!this._valorNominal) { this._errors.push('Valor nominal é obrigatório') }

    if (!this._valorLiquidacao) { this._errors.push('Valor liquidação é obrigatório') }
  }
}
