import { Injectable } from '@angular/core';
import { Regimen } from './regimen';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  routineItems = [];
  // regimen = new Regimen();
  constructor() { }

  addRoutineItem(thing: Regimen): void {
    this.routineItems.push(thing);
    this.routineItems.sort()
    console.log("after sort",this.routineItems)
    // this.regimen = new Regimen();
  }

  getRoutineItems(): Regimen[] {
    // going to sort the routine items by time of day
    this.routineItems.sort()
    console.log("after sort",this.routineItems)
    return this.routineItems;
  }

}
