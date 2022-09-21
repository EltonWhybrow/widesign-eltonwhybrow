import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { HeadingComponent } from './components/heading/heading.component';
import { SubHeadingsComponent } from './components/sub-headings/sub-headings.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CardLargeComponent } from './components/card-large/card-large.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tab/tab.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionItemComponent } from './components/accordion/accordion-item/accordion-item.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AccordionComponent,
    AccordionItemComponent,
    CardComponent,
    CardLargeComponent,
    HeadingComponent,
    SubHeadingsComponent,
    BreadcrumbsComponent,
    SpinnerComponent,
    TabsComponent,
    TabComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    AccordionComponent,
    AccordionItemComponent,
    CardComponent,
    CardLargeComponent,
    HeadingComponent,
    SubHeadingsComponent,
    BreadcrumbsComponent,
    SpinnerComponent,
    RouterModule,
    FormsModule,
    TabsComponent,
    TabComponent,
    FilterPipe
  ]
})
export class SharedModule { }

