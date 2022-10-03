import { Component, OnDestroy, OnInit } from '@angular/core';
import { CanonicalService } from 'src/app/shared/services/canonical.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  constructor(private canonical: CanonicalService) { }

  ngOnInit(): void {
    this.createLinkForCanonicalURL();
  }

  ngOnDestroy(): void {
    this.canonical.destroyLinkForCanonicalURL();
  }


  createLinkForCanonicalURL() {
    this.canonical.createLinkForCanonicalURL();
  }

}
