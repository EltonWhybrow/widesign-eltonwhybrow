import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { RoleGuard } from 'src/app/shared/guards/role.guard';
import { SeoComponent } from './pages/seo/seo.component';
// import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { InterviewRevisionComponent } from './pages/interview-revision/interview-revision.component';
// import { PlaygroundComponent } from './pages/playground/playground.component';
// import { PortfolioDashboardComponent } from './pages/portfolio/portfolio-dashboard/portfolio-dashboard.component';
// import { PortfolioDetailsComponent } from './pages/portfolio/portfolio-details/portfolio-details.component';
// import { PortfolioComponent } from './pages/portfolio/portfolio.component';
// import { SideProjectsComponent } from './pages/side-projects/side-projects.component';

const routes: Routes = [
  { path: '', redirectTo: 'seo', pathMatch: 'full' },
  { path: 'seo', component: SeoComponent, title: 'SEO - Improve, build and increase customer visits' },
  { path: '', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
