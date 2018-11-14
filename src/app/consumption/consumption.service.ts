import { Injectable } from '@angular/core';
import { Consumption } from './consumption';

@Injectable({
  providedIn: 'root'
})
export class ConsumptionService {

  consumptionItems = [];
  constructor() { }

  addConsumptionItem(thing: Consumption): void {
    this.consumptionItems.push(thing);
  }

  getConsumptionItems(): Consumption[] {
    this.consumptionItems.sort()
    return this.consumptionItems;
  }
}
