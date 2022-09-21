import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `
  <div [hidden]="!active" class="pane">
    <ng-content></ng-content>
  </div>
`,
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input('tabTitle') title?: string;
  @Input('tabFragment') fragment?: string;
  @Input() active = false;

  constructor() { }

  ngOnInit(): void {
  }

}
