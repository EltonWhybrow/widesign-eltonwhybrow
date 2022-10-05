import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IPortfolio } from 'src/app/shared/models/portfolio-interface';
import { HttpService } from 'src/app/shared/services/http-service.service';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss']
})
export class PortfolioDetailsComponent implements OnInit {
  portfolioResult: IPortfolio | any;
  allPortfolioData: any;
  portfolioId: string;

  constructor(private route: ActivatedRoute, private httpService: HttpService, public router: Router) {
    // get route param to match data
    this.portfolioId = this.route.snapshot.paramMap.get('id') || ''
  }

  ngOnInit(): void {
    // Get portfolio info
    this.httpService.getPortfolioInfo()
      .subscribe(
        (data: IPortfolio[]) => this.allPortfolioData = data,
        (error: any) => console.log(error),
        // Call match on url param with portfolio item
        () => this.getPortfolioItem(this.portfolioId)
      );
  }

  private getPortfolioItem(id: string): void {
    const resultArray = this.allPortfolioData?.filter((obj: IPortfolio) => obj.url === id);
    this.portfolioResult = resultArray[0];
  }
}
