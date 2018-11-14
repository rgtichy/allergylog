import { Component, OnInit } from '@angular/core';
import { Consumption } from './consumption';
import { Ingredient } from './ingredient';
import { ConsumptionService } from './consumption.service';

@Component({
  selector: 'app-consumption',
  templateUrl: './consumption.component.html',
  styleUrls: ['./consumption.component.css']
})
export class ConsumptionComponent implements OnInit {
  title = "Consumption";
  consumption = new Consumption();
  ingredient = new Ingredient();
  consumptionItems = [];

  constructor(private _consumptionService: ConsumptionService) { }

  ngOnInit() {
    this.consumptionItems = this._consumptionService.getConsumptionItems();
  }
  onSubmit(){
    // console.log("inside add")
    this._consumptionService.addConsumptionItem(this.consumption);
    this.consumption = new Consumption();
  }
  radioClick(e){
    let id = '#'+e.target.id;
    let last = $(`input${id}`).parent("label").siblings("label.active");
    // console.log("!",list3);
    last.removeClass("active");
    // $(id).parent('.btn-group').children('.btn').removeClass("active")
    // $(`input${id}`).closest("label.active").removeClass('active');
    // console.log(id);
    $(id).parent('.btn').addClass("active")
  }
  addIngredient(i){
    // console.log("add ingredient",i);
    this.consumption.ingredients.push(i.toLowerCase());
    this.ingredient = new Ingredient();
  }
  ingredientsList(){
    if (this.consumption.ingredients.length == 0) {
      return ""
    }
    return this.consumption.ingredients.join(", ")+"."
  }
}
