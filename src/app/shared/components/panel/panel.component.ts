import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements AfterViewInit {
  selectedPanel: any;

  constructor(public _elementRef: ElementRef, public renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.renderer.addClass(this.panelItems.first.nativeElement, "open-active");
    this.renderer.addClass(this.panelItems.first.nativeElement, "open");
  }

  panels = [{
    "heading": "Web",
    "main": "Design",
    "footer": "& planning",
  },
  {
    "heading": "I'm a web",
    "main": "Dev",
    "footer": "Engineer",
  },
  {
    "heading": "Make your site",
    "main": "SEO",
    "footer": "Friendly",
  },
  {
    "heading": "Improve the",
    "main": "UX/UI",
    "footer": "for visitors",
  }];

  // Note that the parameter here relates to the #panelItem in the template.
  @ViewChildren('panelItem')
  public panelItems!: QueryList<ElementRef<HTMLLIElement>>

  toggleOpen(panel: any) {
    if (this.panelItems.first.nativeElement.innerHTML.includes('Design')) {
      this.renderer.removeClass(this.panelItems.first.nativeElement, "open-active");
      this.renderer.removeClass(this.panelItems.first.nativeElement, "open");
    }
    console.log(panel);
    this.selectedPanel = panel;
  }
}
