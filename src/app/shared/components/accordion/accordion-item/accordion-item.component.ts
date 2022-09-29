import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './accordion-item.component.html',
})
export class AccordionItemComponent {

  @Input() id: string | undefined;
  @Input() question: string | undefined;
  @Input() answer: string | undefined;

  constructor() { }

}
