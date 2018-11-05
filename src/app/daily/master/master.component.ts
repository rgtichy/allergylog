import { Component, OnInit } from '@angular/core';
import { MasterService } from './master.service';
import { Regimen } from './regimen';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  title = "Daily Regimen Setup"
  regimen = new Regimen();
  routineItems = [];

  constructor(private _masterService: MasterService) { }

  ngOnInit() {
    this.routineItems = this._masterService.getRoutineItems();
  }
  onSubmit(){
    // console.log("inside add")
    this._masterService.addRoutineItem(this.regimen);
    this.regimen = new Regimen();
  }

}
