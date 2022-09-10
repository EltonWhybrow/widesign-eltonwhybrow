import { Component, OnInit } from '@angular/core';
import { ITestmonial } from 'src/app/shared/models/testimonials-interface';
import { HttpService } from 'src/app/shared/services/data-service.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  constructor(private httpService: HttpService) { }
  oneTestimonial: ITestmonial | undefined;

  ngOnInit(): void {

    /*
    Pass in index of which testimonial you want to get/display
    1-4 currently
    */
    this.httpService.getOneTestimonial(1)
      .subscribe(
        (data: ITestmonial) => this.oneTestimonial = data,
        (error: any) => console.log(error),
        // () => console.log('completed')
      );

  }

}
