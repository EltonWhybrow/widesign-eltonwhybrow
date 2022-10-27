import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { IFaq } from 'src/app/shared/models/faq-interface';
import { ITestmonial } from 'src/app/shared/models/testimonials-interface';
import { CanonicalService } from 'src/app/shared/services/canonical.service';
import { HttpService } from 'src/app/shared/services/http-service.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit, OnDestroy {

  constructor(private meta: Meta, private httpService: HttpService, private canonical: CanonicalService) { }
  oneTestimonial: ITestmonial | undefined;
  allQuestions: IFaq[] | undefined;

  ngOnInit(): void {
    this.meta.updateTag({ name: 'description', content: 'Faqs regarding design and development here at wideSign' })
    this.meta.updateTag({ name: 'image', content: './assets/meta/link-share-image.png' })
    this.meta.updateTag({ name: 'site', content: 'widesign.co.uk' })
    this.createLinkForCanonicalURL();
    this.httpService.getFaqs()
      .subscribe(
        (data: IFaq[]) => this.allQuestions = data,
        (error: any) => console.log(error),
        // () => console.log('all questions in faq component', this.allQuestions)
      );

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

  ngOnDestroy(): void {
    this.canonical.destroyLinkForCanonicalURL();
  }

  createLinkForCanonicalURL() {
    this.canonical.createLinkForCanonicalURL();
  }

}
