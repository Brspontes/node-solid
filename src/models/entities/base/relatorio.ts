export default abstract class Relatorio {
  private _id : string

  public get id () : string {
    return this._id
  }

  constructor (id: string) {
    this._id = id
  }
}
