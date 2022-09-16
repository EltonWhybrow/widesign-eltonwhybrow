import { Component, OnInit } from '@angular/core';
import { IServices } from 'src/app/shared/models/service-interface';
import { HttpService } from 'src/app/shared/services/data-service.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  allServicesData: IServices[] | undefined;

  constructor(private httpService: HttpService) { }


  ngOnInit(): void {
    /*
      Getting the offered services data
      */
    this.httpService.getServices()
      .subscribe(
        (data: IServices[]) => this.allServicesData = data,
        (error: any) => console.log(error),
        // () => console.log('completed')
      );

  }

}
