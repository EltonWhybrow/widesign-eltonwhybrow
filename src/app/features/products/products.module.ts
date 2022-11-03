import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SeoComponent } from './pages/seo/seo.component';
import { SeoReportFormComponent } from 'src/app/shared/components/seo-report-form/seo-report-form..component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SeoComponent,
    SeoReportFormComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
