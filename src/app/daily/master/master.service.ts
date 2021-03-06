import { Injectable } from '@angular/core';
import { Regimen } from './regimen';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  // regimenItems: BehaviorSubject<any[]> = new BehaviorSubject([]);
  routineItems = [];
  // regimen = new Regimen();
  constructor() { }

  addRoutineItem(thing: Regimen): void {
    this.routineItems.push(thing);
    // this.routineItems.sort()
    // console.log("after sort",this.routineItems)
  }

  getRoutineItems(): Regimen[] {
    // going to sort the routine items by time of day
    this.routineItems.sort()
    // console.log("after sort",this.routineItems)
    return this.routineItems;
  }

  // updateRegimenItems(stuff: any): void {
  //   this.regimenItems.next(stuff);
  // }
}
