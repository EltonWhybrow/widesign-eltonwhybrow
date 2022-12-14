import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { PrivacyPolicyComponent } from './features/privacy-policy/privacy-policy.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { FooterLandingComponent } from './core/components/footer-landing/footer-landing.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { CallBackComponent } from './shared/components/call-back/call-back.component';
import { PanelComponent } from './shared/components/panel/panel.component';
import { ScrollTopComponent } from './shared/components/scroll-top/scroll-top.component';
import { WINDOW_PROVIDERS } from './shared/services/window.service';
import { SharedModule } from './shared/shared.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    routingComponents,
    CallBackComponent,
    PanelComponent,
    ScrollTopComponent,
    PrivacyPolicyComponent,
    FooterLandingComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [WINDOW_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
