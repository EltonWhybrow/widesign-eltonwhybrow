import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  defaultPanel: boolean = true;
  selectedPanel: any;

  constructor() { }

  panels = [{
    "heading": "Web",
    "main": "Design",
    "footer": "Advocate"
  },
  {
    "heading": "Fontend",
    "main": "Dev",
    "footer": "Engineer"
  },
  {
    "heading": "Healthly",
    "main": "SEO",
    "footer": "Believer"
  }, {
    "word1": "Friendly",
    "word2": "UX/UI",
    "footer": "Installer"
  }];

  // Note that the parameter here relates to the #panelItem in the template.
  @ViewChildren('panelItem')
  public panelItems!: QueryList<ElementRef<HTMLLIElement>>

  toggleOpen(panel: any) {
    console.log(panel);
    this.selectedPanel = panel;
  }
}
