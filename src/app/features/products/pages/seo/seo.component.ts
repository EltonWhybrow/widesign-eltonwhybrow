import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITestmonial } from 'src/app/shared/models/testimonials-interface';
import { HttpService } from 'src/app/shared/services/http-service.service';

@Component({
  selector: 'app-seo',
  templateUrl: './seo.component.html',
  styleUrls: ['./seo.component.scss']
})
export class SeoComponent implements OnInit {

  constructor(private router: Router, private httpService: HttpService) {
  }
  oneTestimonial: ITestmonial | undefined;

  //TODO Put in utility scroll into view
  public anchor(event: any) {
    let anchor = event.target.getAttribute('data-anchor');
    const scrollToElement = window.document.getElementById(anchor);
    setTimeout(() => {
      scrollToElement?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }, 400);
  }

  ngOnInit(): void {

    /*
  Pass in index of which testimonial you want to get/display
  1-4 currently
  */
    this.httpService.getOneTestimonial(4)
      .subscribe(
        (data: ITestmonial) => this.oneTestimonial = data,
        (error: any) => console.log(error),
        // () => console.log('completed')
      );
  }

}
