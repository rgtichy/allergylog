import { Component, OnInit } from '@angular/core';
import { MasterService } from './master/master.service';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {
  title = "Vitamins and Supplements"
  constructor(private _masterService: MasterService) { }

  ngOnInit() {
  }

}
