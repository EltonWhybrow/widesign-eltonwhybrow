import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { HeadingComponent } from './components/heading/heading.component';
import { SubHeadingsComponent } from './components/sub-headings/sub-headings.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CardLargeComponent } from './components/card-large/card-large.component';

@NgModule({
  declarations: [
    CardComponent,
    CardLargeComponent,
    HeadingComponent,
    SubHeadingsComponent,
    BreadcrumbsComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CardComponent,
    CardLargeComponent,
    HeadingComponent,
    SubHeadingsComponent,
    BreadcrumbsComponent,
    SpinnerComponent,
    RouterModule
  ]
})
export class SharedModule { }

