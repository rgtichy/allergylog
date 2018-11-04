import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http';

import { ReactionComponent } from './reaction/reaction.component';
import { ReactionListComponent } from './reaction/reaction-list/reaction-list.component'; // <-- Import HttpModule
import { ReactionService } from './reaction/reaction.service';
import { DailyComponent } from './daily/daily.component';
import { MasterComponent } from './daily/master/master.component';
import { ConsumptionComponent } from './consumption/consumption.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactionComponent,
    ReactionListComponent,
    DailyComponent,
    MasterComponent,
    ConsumptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // <-- Include module in our AppModules
    HttpModule // <-- Include module in our AppModules
  ],
  providers: [ReactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
