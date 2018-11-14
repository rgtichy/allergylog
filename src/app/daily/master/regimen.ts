export class Regimen {
  constructor(
    public id: number = null,
    public time: string = "",
    public description: string = "",
    public dosage: number = 0,
    public um: string = "",
    public doseForm: string = "",
    public ingredients: string[] = [],
    public sunday: Boolean = true,
    public monday: Boolean = true,
    public tuesday: Boolean = true,
    public wednesday: Boolean = true,
    public thursday: Boolean = true,
    public friday: Boolean = true,
    public saturday: Boolean = true,
    public active: Boolean = true,
    public inactiveDate: Date = null,
    public created_at: Date = new Date(),
    public updated_at: Date = new Date()
  ) {
    this.time = `${("0"+this.created_at.getHours()).slice(-2)}:${("0"+this.created_at.getMinutes()).slice(-2)}`
  }
}
