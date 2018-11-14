export class Consumption {
  constructor(
    public id: number = null,
    public date: string = "",
    public time: string = "",
    public description: string = "",
    public type: string = "journal",
    public um: string = "",
    public scaler: number = 1,
    public recipe: number = undefined,
    public upc: number = undefined,
    public ndbno: number = undefined,
    public ingredients: string[] = [],
    public created_at: Date = new Date(),
    public updated_at: Date = new Date()
  ) {
    this.date = `${this.created_at.getFullYear()}-${(this.created_at.getMonth()+1)}-${("0"+this.created_at.getDate()).slice(-2)}`
    this.time = `${("0"+this.created_at.getHours()).slice(-2)}:${("0"+this.created_at.getMinutes()).slice(-2)}`
    // ingredientsList(){
    //   if this.ingredients == [] {
    //     return ""
    //   }
    //   return this.ingredients.join(", ")+"."
    // }
  }
}
