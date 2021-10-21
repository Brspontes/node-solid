export default abstract class EntityBase {
  private _id : string

  public get id () : string {
    return this._id
  }

  public set id (v : string) {
    this._id = v
  }

  constructor () { }
}
