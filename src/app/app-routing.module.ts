import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { PortfolioDashboardComponent } from './features/playground/pages/portfolio/portfolio-dashboard/portfolio-dashboard.component';
import { PortfolioDetailsComponent } from './features/playground/pages/portfolio/portfolio-details/portfolio-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },


  { path: 'portfolio', component: PortfolioDashboardComponent, title: 'Portfolio - Elton Whybrow' },
  { path: 'portfolio/:id', component: PortfolioDetailsComponent, title: 'Portfolio assets - Elton Whybrow' },
  {
    path: 'playground',
    loadChildren: () => import('./features/playground/playground.module').then(m => m.PlaygroundModule)
  },
  { path: '**', component: PageNotFoundComponent, title: 'Page not found - Elton Whybrow' },
  { path: '', pathMatch: 'full', redirectTo: '' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [

]
