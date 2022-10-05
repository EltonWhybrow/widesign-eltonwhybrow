import { Component } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http-service.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  constructor(private httpService: HttpService) { }

}
