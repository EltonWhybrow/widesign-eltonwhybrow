import { Component, OnInit } from '@angular/core';
import { IServices } from 'src/app/shared/models/service-interface';
import { ITestmonial } from 'src/app/shared/models/testimonials-interface';
import { HttpService } from 'src/app/shared/services/data-service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  oneTestimonial: ITestmonial | undefined;
  allServicesData: IServices[] | undefined;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getServices()
      .subscribe(
        (data: IServices[]) => this.allServicesData = data,
        (error: any) => console.log(error),
        () => console.log('completed')
      );

    // Pass in index of which testimonial you want displayed
    this.httpService.getOneTestimonial(0)
      .subscribe(
        (data: ITestmonial) => this.oneTestimonial = data,
        (error: any) => console.log(error),
        () => console.log('completed')
      );
  }

}

