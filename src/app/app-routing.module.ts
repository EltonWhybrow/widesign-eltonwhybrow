import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './core/components/homepage/homepage.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'playground',
    loadChildren: () => import('./features/playground/playground.module').then(m => m.PlaygroundModule)
  },
  { path: '', component: HomepageComponent, title: 'Elton Whybrow - Web Development & Design - WideSign' },
  { path: '**', component: PageNotFoundComponent, title: 'Page not found - Web Development & Design - WideSign' },
  { path: '', pathMatch: 'full', redirectTo: '' },

];


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
  HomepageComponent
]
