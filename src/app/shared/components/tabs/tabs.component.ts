import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  template: `
  <ul class="nav nav-tabs justify-between hidden md:flex">
    <li *ngFor="let tab of tabs; let i = index" (click)="selectTab(tab)" [class.active]="tab.active" class="hex hex-{{i}}">
      <div class="hex inner">
        <div class="hex inner2 flex items-center">
          <span class="inner-text text-3xl font-semibold uppercase text-center">{{tab.title}}</span>
        </div>
      </div>
    </li>
  </ul>

  <ul class="nav nav-tabs justify-center items-center flex md:hidden text-center">
    <li *ngFor="let tab of tabs; let i = index" (click)="selectTab(tab)" [ngClass]="{
        'active':tab.active,'bg-raw-700':tab.active,'text-white':tab.active, 'text-raw-500':!tab.active }" class="p-2 tabs-{{i}} border-b border-r border-gray-200 flex-1 ">
          <span class="text-sm">{{tab.title}}</span>
    </li>
  </ul>
  <div class="my-5 md:my-20">
  <ng-content></ng-content>
</div>
`,
  styles: [
    `
  .tab-close {
    color: gray;
    text-align: right;
    cursor: pointer;
  }
  `
  ]
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs?: QueryList<TabComponent>;

  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    let activeTabs = this.tabs?.filter((tab) => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs?.length === 0) {
      this.selectTab(this.tabs?.first);
    }
  }

  selectTab(tab: any) {
    // deactivate all tabs
    this.tabs?.toArray().forEach(tab => tab.active = false);

    // activate the tab the user has clicked on.
    tab.active = true;
  }

}
