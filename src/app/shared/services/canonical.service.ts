import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CanonicalService {

  constructor(@Inject(DOCUMENT) private doc: any) { }

  destroyLinkForCanonicalURL() {
    const els = this.doc.querySelectorAll('link[rel=\'canonical\']');
    for (let i = 0, l = els.length; i < l; i++) {
      const el = els[i];
      el.remove();
    }
  }

  createLinkForCanonicalURL() {
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.doc.head.appendChild(link);
    link.setAttribute('href', this.doc.URL);
  }
}
