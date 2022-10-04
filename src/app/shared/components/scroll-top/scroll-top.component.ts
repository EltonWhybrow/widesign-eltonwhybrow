import { Component, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from '../../services/window.service';
import { debounce } from '../../../shared/decorators';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html'
})
export class ScrollTopComponent {
  windowScrolled: boolean = false;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window) { }
  @HostListener('window:scroll', [])
  @debounce()
  onWindowScroll() {
    if ((this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop) > 700)
      this.windowScrolled = true;
    else if ((this.windowScrolled && this.window.pageYOffset ||
      this.document.documentElement.scrollTop || this.document.body.scrollTop) < 100)
      this.windowScrolled = false;
  }
  scrollToTop() {
    (function smoothscroll() {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 12));
      }
    })();
  }

}
