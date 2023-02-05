import { Component, OnDestroy, OnInit } from '@angular/core';
import { IPortfolio } from 'src/app/shared/models/portfolio-interface';
import { CanonicalService } from 'src/app/shared/services/canonical.service';
import { HttpService } from 'src/app/shared/services/http-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy {
  totalAngularPackages: any;
  allPortfolioData: IPortfolio[] | undefined;

  constructor(private canonical: CanonicalService, private httpService: HttpService) {

  }


  ngOnInit(): void {
    /*
     Getting the offered services data
     */
    this.httpService.getPortfolioInfo()
      .subscribe(
        (data: IPortfolio[]) => this.allPortfolioData = data,
        (error: any) => console.log(error),
        // () => console.log('completed')
      );

    this.createLinkForCanonicalURL();
  }

  ngOnDestroy(): void {
    this.canonical.destroyLinkForCanonicalURL();
  }

  createLinkForCanonicalURL() {
    this.canonical.createLinkForCanonicalURL();
  }


}
