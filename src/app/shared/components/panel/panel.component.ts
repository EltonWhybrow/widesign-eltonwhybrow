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
    "heading": "Help with",
    "main": "Design",
    "footer": "& planning"
  },
  {
    "heading": "I'm a web",
    "main": "Dev",
    "footer": "Engineer"
  },
  {
    "heading": "Make your site",
    "main": "SEO",
    "footer": "Friendly"
  },
  {
    "heading": "Improve the",
    "main": "UX/UI",
    "footer": "for visitors"
  }];

  // Note that the parameter here relates to the #panelItem in the template.
  @ViewChildren('panelItem')
  public panelItems!: QueryList<ElementRef<HTMLLIElement>>

  toggleOpen(panel: any) {
    console.log(panel);
    this.selectedPanel = panel;
  }
}
