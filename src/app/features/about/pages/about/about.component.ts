import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/shared/services/canonical.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  constructor(private meta: Meta, private canonical: CanonicalService) { }

  ngOnInit(): void {
    this.meta.updateTag({ name: 'description', content: 'About Elton Whybrow as a developer/designer with a skater past' })
    this.meta.updateTag({ name: 'image', content: './assets/meta/link-share-image.png' })
    this.meta.updateTag({ name: 'site', content: 'widesign.co.uk' })
    this.createLinkForCanonicalURL();
  }

  ngOnDestroy(): void {
    this.canonical.destroyLinkForCanonicalURL();
  }


  createLinkForCanonicalURL() {
    this.canonical.createLinkForCanonicalURL();
  }

}
