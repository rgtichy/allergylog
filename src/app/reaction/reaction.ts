export class Reaction {
  constructor(
    public id: number = null,
    public onsetDate: string = "",
    public onsetTime: string = "",
    public description: string = "",
    public severity: number = 3,
    public treatment: string = "",
    public duration: number = 0,
    public created_at: Date = new Date(),
    public updated_at: Date = new Date()
  ) {
    this.onsetDate = `${this.created_at.getFullYear()}-${(this.created_at.getMonth()+1)}-${("0"+this.created_at.getDate()).slice(-2)}`
    this.onsetTime = `${("0"+this.created_at.getHours()).slice(-2)}:${("0"+this.created_at.getMinutes()).slice(-2)}`
  }
}
