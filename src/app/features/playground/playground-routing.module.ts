import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { RoleGuard } from 'src/app/shared/guards/role.guard';
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
      { path: 'dashboard', component: DashboardComponent, title: 'Dashboard - Web Development & Design - WideSign' },
      {
        path: '', component: PortfolioComponent,
        children: [
          { path: 'portfolio', component: PortfolioDashboardComponent, title: 'Portfolio - Web Development & Design - WideSign' },
          { path: 'portfolio/:id', component: PortfolioDetailsComponent, title: 'Portfolio assets - Web Development & Design - WideSign' }
        ]
      },
      { path: 'interview-revision', component: InterviewRevisionComponent, canActivate: [RoleGuard], title: 'Revision - Web Development & Design - WideSign' },
      { path: 'side-projects', component: SideProjectsComponent, title: 'Side Projects - Web Development & Design - WideSign' },
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaygroundRoutingModule { }
