import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { TestimonialComponent } from './shared/components/testimonial/testimonial.component';
import { CallBackComponent } from './shared/components/call-back/call-back.component';
import { CompaniesComponent } from './shared/components/companies/companies.component';
import { PanelComponent } from './shared/components/panel/panel.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { CardLargeComponent } from './shared/components/card-large/card-large.component';
import { AccordionComponent } from './shared/components/accordion/accordion.component';
import { AccordionItemComponent } from './shared/components/accordion/accordion-item/accordion-item.component';
import { ScrollTopComponent } from './shared/components/scroll-top/scroll-top.component';
import { WINDOW_PROVIDERS } from './shared/services/window.service';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AccordionComponent,
    AccordionItemComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    TestimonialComponent,
    CardLargeComponent,
    routingComponents,
    CallBackComponent,
    CompaniesComponent,
    PanelComponent,
    SpinnerComponent,
    ScrollTopComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [WINDOW_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
