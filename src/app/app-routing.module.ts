import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './core/components/homepage/homepage.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { AboutComponent } from './features/about/pages/about/about.component';
import { PricingComponent } from './features/about/pages/pricing/pricing.component';
import { TestimonialsComponent } from './features/about/pages/testimonials/testimonials.component';
import { ContactComponent } from './features/contact/pages/contact/contact.component';
import { FaqsComponent } from './features/faqs/pages/faqs/faqs.component';
import { PortfolioComponent } from './features/portfolio/pages/portfolio/portfolio.component';
import { ServicesComponent } from './features/services/pages/services/services.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: 'services', component: ServicesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'playground',
    loadChildren: () => import('./features/playground/playground.module').then(m => m.PlaygroundModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  { path: '**', component: PageNotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  HomepageComponent,
  ServicesComponent,
  PortfolioComponent,
  AboutComponent,
  FaqsComponent,
  TestimonialsComponent,
  PricingComponent,
  ContactComponent
]
