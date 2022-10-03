import { Component, OnDestroy, OnInit } from '@angular/core';
import { CanonicalService } from 'src/app/shared/services/canonical.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy {
  totalAngularPackages: any;

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
