import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './core/components/homepage/homepage.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { AboutComponent } from './features/about/pages/about/about.component';
import { ClientAreaComponent } from './features/client-area/client-area.component';
import { ContactComponent } from './features/contact/pages/contact/contact.component';
import { FaqsComponent } from './features/faqs/pages/faqs/faqs.component';
import { PrivacyPolicyComponent } from './features/privacy-policy/privacy-policy.component';
import { ServicesComponent } from './features/services/pages/services/services.component';

const routes: Routes = [
  {
    path: 'playground',
    loadChildren: () => import('./features/playground/playground.module').then(m => m.PlaygroundModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  { path: '', component: HomepageComponent, title: 'Elton Whybrow - Web Development & Design - WideSign' },
  { path: 'services', component: ServicesComponent, title: 'Services - Web Development & Design - WideSign' },
  { path: 'about', component: AboutComponent, title: 'About - Web Development & Design - WideSign' },
  { path: 'privacy-policy', component: PrivacyPolicyComponent, title: 'Privacy / Cookies - Web Development & Design - WideSign' },
  { path: 'faqs', component: FaqsComponent, title: 'FAQs - Web Development & Design - WideSign' },
  { path: 'client-area', component: ClientAreaComponent, title: 'Client area - Web Development & Design - WideSign' },
  { path: 'contact', component: ContactComponent, title: 'Contact - Web Development & Design - WideSign' },
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
  HomepageComponent,
  ServicesComponent,
  AboutComponent,
  FaqsComponent,
  ClientAreaComponent,
  ContactComponent
]
