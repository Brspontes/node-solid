import Relatorio from './base/entityBase'

export default class RelatorioEstoque extends Relatorio {
  constructor (descricao: string) {
    super()
    this._descricao = descricao
  }

  private _descricao : string

  public get descricao () : string {
    return this._descricao
  }
}
