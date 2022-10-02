import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html'
})
export class AccordionComponent {

  @Input() parentData: any | undefined;
  searchText = '';
  @Input() searchBar: boolean = false;
  @Input() searchButtons: boolean = false;
  @Input() heading: string = '';
  @Input() subHeading: string = '';

  constructor() { }
}





