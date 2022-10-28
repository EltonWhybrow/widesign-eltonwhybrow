import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { cold, getTestScheduler } from 'jasmine-marbles';

import { HttpService } from 'src/app/shared/services/http-service.service';
import { ServicesComponent } from './services.component';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';
import { HeadingComponent } from 'src/app/shared/components/heading/heading.component';
import { SubHeadingsComponent } from 'src/app/shared/components/sub-headings/sub-headings.component';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { TestimonialComponent } from 'src/app/shared/components/testimonial/testimonial.component';
import { CardLargeComponent } from 'src/app/shared/components/card-large/card-large.component';
import { ITestmonial } from 'src/app/shared/models/testimonials-interface';
import { IServices } from 'src/app/shared/models/service-interface';

import { findElAll } from 'src/app/testing-functions'

const testServices: IServices[] = [
  {
    id: 1,
    heading: "Development",
    body: "Lorem ipsum",
    footer: [
      "Angular",
      "Node",
      "CD/CI",
    ],
    url: "/contact",
    imageName: "web-development"
  },
  {
    id: 2,
    heading: "Design",
    body: "Lorem ipsum",
    footer: [
      "Sketch",
    ],
    url: "/contact",
    imageName: "web-development"
  }];

const testTestimonials: ITestmonial[] = [
  {
    rating: 2,
    company: "Bud Design & Landscaping",
    name: "Steve Corio",
    image: "testimonial-steve-profile",
    testimonialHighlight: "Highlight1",
    testimonial: "Testi1",
    location: "Slough, Berkshire"
  },
  {
    rating: 2,
    company: "Spares 4 Mowers",
    name: "Mark James",
    image: "testimonial-mark-profile",
    testimonialHighlight: "Highlight2",
    testimonial: "Testi2",
    location: "Holyport, Maidenhead"
  }];

class HttpServiceStub {
  getServices() {
    const testServices$ = cold('--x|', { x: testServices });
    return testServices$
  }

  // getServicesError() {
  //   // instead of return of(testServices);
  //   const testTestimonials$ = cold('--x|', { x: {} });
  //   return testTestimonials$
  // }

  getOneTestimonial() {
    // instead of return of(testTestimonials);
    const testTestimonials$ = cold('--x|', { x: testTestimonials[0] });
    return testTestimonials$
  }
}

describe('ServicesComponent', () => {
  let servicesComponent: ServicesComponent;
  let fixture: ComponentFixture<ServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ServicesComponent,
        SpinnerComponent,
        HeadingComponent,
        SubHeadingsComponent,
        HeaderComponent,
        TestimonialComponent,
        CardLargeComponent],
      imports: [HttpClientTestingModule],
      // schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).overrideComponent(ServicesComponent, {
      set: {
        providers: [
          {
            provide: HttpService,
            useClass: HttpServiceStub,
          },
        ],
      },
    })

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesComponent);
    servicesComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(servicesComponent).toBeTruthy();
  });

  it('created and returns testimonial data',
    waitForAsync(() => {
      fixture.whenStable().then(() => {
        getTestScheduler().flush(); // flush the observables
        fixture.detectChanges();
        expect(servicesComponent).toBeDefined();
        // console.log('>>>oneTestimonial>>>', servicesComponent.oneTestimonial);
        // console.log('>>>testTestimonials>>>', testTestimonials[0]);
        expect(servicesComponent.oneTestimonial).toEqual(testTestimonials[0]);
      });
    })
  );

  it('created and returns services data',
    waitForAsync(() => {
      fixture.whenStable().then(() => {
        getTestScheduler().flush(); // flush the observables
        fixture.detectChanges();
        expect(servicesComponent).toBeDefined();
        expect(servicesComponent.allServicesData).toEqual(testServices);
      });
    })
  );


  it('verify html for services data',
    waitForAsync(() => {
      fixture.whenStable().then(() => {
        // Arrange
        getTestScheduler().flush(); // flush the observables
        fixture.detectChanges();
        // Act
        const headerElements = findElAll(fixture, 'header')
        // fixture.debugElement.queryAll(By.css('[data-testid="header"]'));
        const imageElements = findElAll(fixture, 'serviceImg')
        // fixture.debugElement.queryAll(By.css('[data-testid="serviceImg"]'));
        // console.log('>>>headerElements>>>', headerElements);
        // console.log('>>>debugElement>>>', fixture.debugElement);
        // console.log('>>>fixture>>>', fixture);
        // console.log('>>>nativeElement>>>', fixture.nativeElement);
        // console.log('>>>componentInstance>>>', fixture.componentInstance);
        // Assert
        headerElements.forEach((element, index) => {
          expect(element.nativeElement.textContent).toBe(testServices[index].heading);
        });
        imageElements.forEach((element, index) => {
          // TODO: fix below
          // expect(element.nativeElement.src).toContain(testServices[index].imageName);
          // expect(element.nativeElement.alt).toContain(testServices[index].imageName);
        });
      });
    })
  );


});
