import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaygroundRoutingModule } from './playground-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PlaygroundComponent } from './pages/playground/playground.component';
import { PortfolioDetailsComponent } from './pages/portfolio/portfolio-details/portfolio-details.component';
import { PortfolioDashboardComponent } from './pages/portfolio/portfolio-dashboard/portfolio-dashboard.component';
import { InterviewRevisionComponent } from './pages/interview-revision/interview-revision.component';
import { SideProjectsComponent } from './pages/side-projects/side-projects.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DashboardComponent,
    PortfolioComponent,
    PlaygroundComponent,
    PortfolioDetailsComponent,
    PortfolioDashboardComponent,
    InterviewRevisionComponent,
    SideProjectsComponent
  ],
  imports: [
    CommonModule,
    PlaygroundRoutingModule,
    SharedModule
  ]
})
export class PlaygroundModule { }
