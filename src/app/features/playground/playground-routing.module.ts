import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InterviewComponent } from './pages/interview/interview.component';
import { PlaygroundComponent } from './pages/playground/playground.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { RevisionComponent } from './pages/revision/revision.component';

const routes: Routes = [

  {
    path: '', component: PlaygroundComponent, canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'interview', component: InterviewComponent },
      { path: 'revision', component: RevisionComponent },
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaygroundRoutingModule { }
