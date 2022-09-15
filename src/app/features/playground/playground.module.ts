import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaygroundRoutingModule } from './playground-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PlaygroundComponent } from './pages/playground/playground.component';
import { InterviewComponent } from './pages/interview/interview.component';
import { RevisionComponent } from './pages/revision/revision.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PortfolioComponent,
    PlaygroundComponent,
    InterviewComponent,
    RevisionComponent
  ],
  imports: [
    CommonModule,
    PlaygroundRoutingModule,
    SharedModule
  ]
})
export class PlaygroundModule { }
