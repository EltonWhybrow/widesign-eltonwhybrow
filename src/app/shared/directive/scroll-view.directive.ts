import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ScrollViewDirective]'
})
export class ScrollViewDirective {

  constructor(private _elementRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('click', ['$event.target'])
  async scrollIntoView() {
    if (this._elementRef.nativeElement.parentNode.parentNode.classList.contains('active')) {
      this.renderer.removeClass(this._elementRef.nativeElement.parentNode.parentNode, "active");
      for (let child of this._elementRef.nativeElement.parentNode.parentNode.parentNode.children) {
        this.renderer.removeClass(child, 'active');
      }
    } else {
      this.renderer.addClass(this._elementRef.nativeElement.parentNode.parentNode, "active");
      setTimeout(() => {
        this._elementRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }, 400)
    }

  }

}
