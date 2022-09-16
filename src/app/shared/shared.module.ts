import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { HeadingComponent } from './components/heading/heading.component';
import { SubHeadingsComponent } from './components/sub-headings/sub-headings.component';

@NgModule({
  declarations: [
    CardComponent,
    HeadingComponent,
    SubHeadingsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    HeadingComponent,
    SubHeadingsComponent
  ]
})
export class SharedModule { }

