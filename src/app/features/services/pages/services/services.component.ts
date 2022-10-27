import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { IServices } from 'src/app/shared/models/service-interface';
import { ITestmonial } from 'src/app/shared/models/testimonials-interface';
import { CanonicalService } from 'src/app/shared/services/canonical.service';
import { HttpService } from 'src/app/shared/services/http-service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit, OnDestroy {
  oneTestimonial: ITestmonial | undefined;
  allServicesData: IServices[] | undefined;

  constructor(private meta: Meta, private httpService: HttpService, private canonical: CanonicalService) { }

  ngOnInit(): void {
    this.meta.updateTag({ name: 'description', content: 'Development and Design services at WideSign - AKA Elton Whybrow ' })
    this.meta.updateTag({ name: 'image', content: './assets/meta/link-share-image.png' })
    this.meta.updateTag({ name: 'site', content: 'widesign.co.uk' })
    this.createLinkForCanonicalURL();
    /*
    Getting the offered services data
    */
    this.httpService.getServices()
      .subscribe(
        (data: IServices[]) => this.allServicesData = data,
        (error: any) => console.log(error),
        // () => console.log('completed')
      );

    /*
    Pass in index of which testimonial you want to get/display
    1-4 currently
    */
    this.httpService.getOneTestimonial(0)
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

