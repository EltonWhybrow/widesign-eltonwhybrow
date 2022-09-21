import { Component, OnInit } from '@angular/core';
import { IPortfolio } from 'src/app/shared/models/portfolio-interface';
import { HttpService } from 'src/app/shared/services/data-service.service';

@Component({
  selector: 'app-portfolio-dashboard',
  templateUrl: './portfolio-dashboard.component.html',
  styleUrls: ['./portfolio-dashboard.component.scss']
})
export class PortfolioDashboardComponent implements OnInit {
  allPortfolioData: IPortfolio[] | undefined;

  constructor(private httpService: HttpService) { }
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

  }

}
