import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `
  <div [hidden]="!active" class="pane">
    <ng-content></ng-content>
  </div>
`,
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {
  @Input() title?: string;
  @Input() fragment?: string;
  @Input() active = false;

  constructor() { }



}
