import Relatorio from './base/relatorio'

export default class RelatorioEstoque extends Relatorio {
  constructor (id: string, descricao: string) {
    super(id)
    this._descricao = descricao
  }

  private _descricao : string

  public get descricao () : string {
    return this._descricao
  }
}
