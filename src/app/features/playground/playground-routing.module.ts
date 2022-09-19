import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InterviewRevisionComponent } from './pages/interview-revision/interview-revision.component';
import { PlaygroundComponent } from './pages/playground/playground.component';
import { PortfolioDashboardComponent } from './pages/portfolio/portfolio-dashboard/portfolio-dashboard.component';
import { PortfolioDetailsComponent } from './pages/portfolio/portfolio-details/portfolio-details.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { SideProjectsComponent } from './pages/side-projects/side-projects.component';

const routes: Routes = [

  {
    path: '', component: PlaygroundComponent, canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: '', component: PortfolioComponent,
        children: [
          { path: 'portfolio', component: PortfolioDashboardComponent },
          { path: 'portfolio/:id', component: PortfolioDetailsComponent }
        ]
      },
      { path: 'interview-revision', component: InterviewRevisionComponent },
      { path: 'side-projects', component: SideProjectsComponent },
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaygroundRoutingModule { }
