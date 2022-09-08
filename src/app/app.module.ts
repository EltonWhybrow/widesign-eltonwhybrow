import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { CardComponent } from './shared/components/card/card.component';
import { TestimonialComponent } from './shared/components/testimonial/testimonial.component';
import { CallBackComponent } from './shared/components/call-back/call-back.component';
import { CompaniesComponent } from './shared/components/companies/companies.component';
import { PanelComponent } from './shared/components/panel/panel.component';
import { ClientAreaComponent } from './features/client-area/client-area.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { CardLargeComponent } from './shared/components/card-large/card-large.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    TestimonialComponent,
    CardComponent,
    CardLargeComponent,
    routingComponents,
    CallBackComponent,
    CompaniesComponent,
    PanelComponent,
    ClientAreaComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
