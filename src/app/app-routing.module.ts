import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactionComponent } from './reaction/reaction.component';
import { DailyComponent } from './daily/daily.component';
import { MasterComponent } from './daily/master/master.component';
import { ConsumptionComponent } from './consumption/consumption.component';
import { ReactionListComponent } from './reaction/reaction-list/reaction-list.component';

const routes: Routes = [
  {
    path: 'reaction',
    // pathMatch: 'full',
    // component: ReactionComponent,
    children: [
        {
          path: '',
          component: ReactionComponent
        },
        {
          path: 'log',
          component: ReactionListComponent
        }
      ]
  },
  {
    path: 'daily',
    children: [
        {
          path: '',
          component: DailyComponent,
        },
        {
          path: 'master',
          component: MasterComponent,
        },
    ]
  },
  {
    path: 'consumption',
    pathMatch: 'full',
    component: ConsumptionComponent
  },
  {
    path: '',
    redirectTo: '/daily',
    pathMatch: 'full',
  },
  {
    path: 'home',
    redirectTo: '/daily',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
