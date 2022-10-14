import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { cold, getTestScheduler } from 'jasmine-marbles';

import { FaqsComponent } from './faqs.component';
import { IFaq } from 'src/app/shared/models/faq-interface';
import { ITestmonial } from 'src/app/shared/models/testimonials-interface';
import { HttpService } from 'src/app/shared/services/http-service.service';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';
import { HeadingComponent } from 'src/app/shared/components/heading/heading.component';
import { SubHeadingsComponent } from 'src/app/shared/components/sub-headings/sub-headings.component';
import { FooterComponent } from 'src/app/core/components/footer/footer.component';
import { AccordionComponent } from 'src/app/shared/components/accordion/accordion.component';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { ScrollTopComponent } from 'src/app/shared/components/scroll-top/scroll-top.component';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { TestimonialComponent } from 'src/app/shared/components/testimonial/testimonial.component';
import { By } from '@angular/platform-browser';

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

const testmockFaqs: IFaq[] = [
  {
    id: 1,
    question: "Can you help me built my website from scratch?",
    answer: "Yes, I have experience working with many companies and helping them get online for the first time. Usually I arrange a informal chat to discuss what the client is hoping to acheive and what areas I can help them with. I would write up a full proposal for them to read and they can then decide whether I cam someone they would like to work with. No pressure!"
  },
  {
    id: 2,
    question: "Do you host websites?",
    answer: "Yes, I have a trusted company that I work with and the support and server speed is second to none. I have be using them for over a 10 years and never had a proble. I set up clients domain names, emails and hosting all through their great user freindly interface. All your online needs are in one place for yourself or me to access, whichever you prefer. View various <a href='https://widesign.duoservers.com/' class='underline' target='_blank'>hosting packages</a> on offer or contact me to discuss further."
  },
  {
    id: 3,
    question: "Do you build apps for the App Store?",
    answer: "No, although I have experience building hybrid apps using the ionic framework if you want a iOS or Android for their respective app stores I would suggest you contact a dedicated iOS or Android Developer."
  },];

class HttpServiceStub {
  getFaqs() {
    // instead of return of(testmockFaqs);
    const testmockFaqs$ = cold('--x|', { x: testmockFaqs });
    return testmockFaqs$
  }

  getOneTestimonial() {
    // instead of return of(testtestTestimonialsServices);
    const testTestimonials$ = cold('--x|', { x: testTestimonials[0] });
    return testTestimonials$
  }
}

describe('FaqsComponent', () => {
  let faqsComponent: FaqsComponent;
  let fixture: ComponentFixture<FaqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FaqsComponent,
        SpinnerComponent,
        HeadingComponent,
        SubHeadingsComponent,
        FooterComponent,
        AccordionComponent,
        TestimonialComponent,
        HeaderComponent,
        FilterPipe
        // TestimonialComponent,
        // CardLargeComponent
      ],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).overrideComponent(FaqsComponent, {
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
    fixture = TestBed.createComponent(FaqsComponent);
    faqsComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(faqsComponent).toBeTruthy();
  });

  it('created and returns testimonial data',
    waitForAsync(() => {
      fixture.whenStable().then(() => {
        getTestScheduler().flush(); // flush the observables
        fixture.detectChanges();
        expect(faqsComponent).toBeDefined();
        // console.log('>>>oneTestimonial>>>', faqsComponent.oneTestimonial);
        // console.log('>>>testTestimonials>>>', testTestimonials[0]);
        expect(faqsComponent.oneTestimonial).toEqual(testTestimonials[0]);
      });
    })
  );

  it('verify html for testimonial data',
    waitForAsync(() => {
      fixture.whenStable().then(() => {
        // Arrange
        getTestScheduler().flush(); // flush the observables
        fixture.detectChanges();

        // Act
        const highlightTestiElements = fixture.debugElement.query(By.css('[data-testid="highLightTesti"]'));
        const imageElements = fixture.debugElement.query(By.css('[data-testid="testiImage"]'));
        // console.log('>>>headerElements>>>', highlightTestiElements);
        // console.log('>>>headerElements>>>', imageElements);
        // console.log('>>>debugElement>>>', fixture.debugElement);
        //  console.log('>>>fixture>>>', fixture);
        // console.log('>>>nativeElement>>>', fixture.nativeElement);
        // console.log('>>>componentInstance>>>', fixture.componentInstance);

        // Assert
        expect(highlightTestiElements.nativeElement.textContent).toContain(testTestimonials[0].testimonialHighlight);
        expect(imageElements.nativeElement.src).toContain(testTestimonials[0].image);
        expect(imageElements.nativeElement.alt).toContain(testTestimonials[0].name);

      });
    })
  );


});
