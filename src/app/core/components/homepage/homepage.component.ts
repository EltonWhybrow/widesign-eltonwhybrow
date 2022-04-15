import { Component, OnInit } from '@angular/core';

import { HttpService } from 'src/app/shared/services/data-service.service';
import { IServices } from 'src/app/shared/models/service-interface';
import { IClients } from 'src/app/shared/models/clients-interface';
import { tap } from 'rxjs/operators';
import { ITestmonial } from 'src/app/shared/models/testimonials-interface';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  allServicesData: IServices[] | undefined;
  oneTestimonial: any | undefined;

  ngOnInit(): void {
    this.httpService.getServices()
      .subscribe(
        (data: IServices[]) => this.allServicesData = data,
        (error: any) => console.log(error),
        () => console.log('completed')
      );

    this.httpService.getOneTestimonial()
      .subscribe(
        (data: any) => this.oneTestimonial = data,
        (error: any) => console.log(error),
        () => console.log('completed')
      );
  }

}
