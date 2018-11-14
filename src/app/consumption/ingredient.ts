export class Ingredient {
  constructor(
    public id: number = null,
    public name: string = "",
    public um: string = "",
    public ndbno: number = 0,
    public created_at: Date = new Date(),
    public updated_at: Date = new Date()
  ) {

  }
}
