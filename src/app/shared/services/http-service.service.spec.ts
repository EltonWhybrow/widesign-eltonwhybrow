import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { HttpService } from './http-service.service';
import { IServices } from '../models/service-interface';
import { ITestmonial } from '../models/testimonials-interface';


describe('DataServiceService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let httpService: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HttpService
      ]
    });

    //Instantaites HttpClient, HttpTestingController and HttpService
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    httpService = TestBed.inject(HttpService);
  });

  afterEach(() => {
    httpTestingController.verify(); //Verifies that no requests are outstanding.
  });

  describe('getServices', () => {
    let mockExpectedServices: IServices[];
    let servicesUrl: string;

    beforeEach(() => {
      servicesUrl = '../../assets/data/ws-services.json';
      mockExpectedServices = [
        {
          id: 2,
          heading: "Development",
          body: "Been building website in various languages for some time now. Mainly used Angular in a commercial environment. Proficient in custom CMS theming in wordpress as well as using headless CMS to serve apps. <br /> Adhere to best practices and creating maintainable, tested code. Always willing to learn more and wanting to make web experiences as engaging, accessible and user friendly as possible for user/clients",
          footer: [
            "Angular",
            "Node",
            "CD/CI",
            "CMS",
            "Typescript"
          ],
          url: "/contact",
          imageName: "web-development"
        },
        {
          id: 3,
          heading: "UX/UI Design",
          body: "Usability is a key considerations when building any application. Confusing the user is you single point of failure. Designing UI's that just work, before going to build can make for some happy devs, and stakeholders. <br />Always looking at ways to simplify the interface whilst using tried and tested methods to funnel users to the end goal &amp; increase engagement",
          footer: [
            "inVision",
            "Sketch",
            "AdobeXD"
          ],
          url: "/contact",
          imageName: "ux-ui-design"
        }
      ] as IServices[];
    });

    it('should return expected Quesion by calling once', () => {
      httpService.getServices().subscribe(
        service => {
          expect(service).toEqual(mockExpectedServices),
            fail
        }
      );

      const req = httpTestingController.expectOne(servicesUrl);
      expect(req.request.method).toEqual('GET');

      req.flush(mockExpectedServices); //Return mockExpectedServices
    });

    it('should be OK returning no question', () => {
      httpService.getServices().subscribe(
        service => expect(service.length).toEqual(0),
        fail
      );

      const req = httpTestingController.expectOne(servicesUrl);
      req.flush([]); //Return empty data
    });

    it('should turn 404 error', () => {
      httpService.getServices().subscribe(
        service => {
          expect(service.length).toEqual(0),
            fail
        }
      );
      ;
      const req = httpTestingController.expectOne(servicesUrl);

      const msg = '404 error occurred';
      req.flush(msg, { status: 404, statusText: 'No service Found' }); //Return error
    });

    it('should return expected service when called multiple times', () => {
      httpService.getServices().subscribe();
      httpService.getServices().subscribe(
        service => expect(service).toEqual(mockExpectedServices),
        fail
      );

      const requests = httpTestingController.match(servicesUrl);
      expect(requests.length).toEqual(2);

      requests[0].flush([]); //Return Empty body for first call
      requests[1].flush(mockExpectedServices); //Return mockExpectedServices in second call
    });

  });

  describe('getTestimonials', () => {
    let mockExpectedTestimonials: ITestmonial[];
    let testimonialUrl: string;

    beforeEach(() => {
      testimonialUrl = '../../assets/data/ws-testimonials.json';
      mockExpectedTestimonials = [
        {
          rating: 2,
          company: "Bud Design & Landscaping",
          name: "Steve Corio",
          image: "testimonial-steve-profile",
          testimonialHighlight: "Not only did Elton capture our vision beautifully he took it to the next level.",
          testimonial: "Having him design and build our website has been a true pleasure, a bonus is he's always available on the phone when we need help with something.",
          location: "Slough, Berkshire"
        },
        {
          rating: 2,
          company: "Spares 4 Mowers",
          name: "Mark James",
          image: "testimonial-mark-profile",
          testimonialHighlight: "Had the best experience working with Elton at WideSign.",
          testimonial: "He knows his stuff, and is extremely competent and reliable. He has set up and maintained multiple sites for us spanning a decade now.",
          location: "Holyport, Maidenhead"
        },
        {
          rating: 5,
          company: "BT Roofing Services Limited",
          name: "Frankie Austin",
          image: "testimonial-frankie-profile",
          testimonialHighlight: "It can be a minefield trying to choose the right designers/developer to work with, Elton's extremely passionate, he brings fresh new ideas to table every time.",
          testimonial: "His extensive knowledge and computer wizardry is something to be admired, which has definitely given my company a competitive edge",
          location: "Reigate, Surrey"
        }
      ] as ITestmonial[];
    });

    it('should return expected Quesion by calling once', () => {
      httpService.getTestimonials().subscribe(
        service => {
          expect(service).toEqual(mockExpectedTestimonials),
            fail
        }
      );

      const req = httpTestingController.expectOne(testimonialUrl);
      expect(req.request.method).toEqual('GET');

      req.flush(mockExpectedTestimonials); //Return mockExpectedTestimonials
    });

    it('should be OK returning no question', () => {
      httpService.getTestimonials().subscribe(
        service => expect(service.length).toEqual(0),
        fail
      );

      const req = httpTestingController.expectOne(testimonialUrl);
      req.flush([]); //Return empty data
    });

    it('should turn 404 error', () => {
      httpService.getTestimonials().subscribe(
        service => {
          expect(service.length).toEqual(0),
            fail
        }
      );
      ;
      const req = httpTestingController.expectOne(testimonialUrl);

      const msg = '404 error occurred';
      req.flush(msg, { status: 404, statusText: 'No service Found' }); //Return error
    });

    it('should return expected service when called multiple times', () => {
      httpService.getTestimonials().subscribe();
      httpService.getTestimonials().subscribe(
        service => expect(service).toEqual(mockExpectedTestimonials),
        fail
      );

      const requests = httpTestingController.match(testimonialUrl);
      expect(requests.length).toEqual(2);

      requests[0].flush([]); //Return Empty body for first call
      requests[1].flush(mockExpectedTestimonials); //Return mockExpectedTestimonials in second call
    });

  });

  describe('getOneTestimonial', () => {
    let mockExpectedTestimonials: ITestmonial[];
    let testimonialUrl: string;

    beforeEach(() => {
      testimonialUrl = '../../assets/data/ws-testimonials.json';
      mockExpectedTestimonials = [
        {
          rating: 2,
          company: "Bud Design & Landscaping",
          name: "Steve Corio",
          image: "testimonial-steve-profile",
          testimonialHighlight: "Not only did Elton capture our vision beautifully he took it to the next level.",
          testimonial: "Having him design and build our website has been a true pleasure, a bonus is he's always available on the phone when we need help with something.",
          location: "Slough, Berkshire"
        },
        {
          rating: 2,
          company: "Spares 4 Mowers",
          name: "Mark James",
          image: "testimonial-mark-profile",
          testimonialHighlight: "Had the best experience working with Elton at WideSign.",
          testimonial: "He knows his stuff, and is extremely competent and reliable. He has set up and maintained multiple sites for us spanning a decade now.",
          location: "Holyport, Maidenhead"
        },
        {
          rating: 5,
          company: "BT Roofing Services Limited",
          name: "Frankie Austin",
          image: "testimonial-frankie-profile",
          testimonialHighlight: "It can be a minefield trying to choose the right designers/developer to work with, Elton's extremely passionate, he brings fresh new ideas to table every time.",
          testimonial: "His extensive knowledge and computer wizardry is something to be admired, which has definitely given my company a competitive edge",
          location: "Reigate, Surrey"
        }
      ] as ITestmonial[];
    });

    it('should return expected Quesion by calling once', () => {
      httpService.getOneTestimonial(0).subscribe(
        service => {
          expect(service).toEqual(mockExpectedTestimonials[0]),
            fail
        }
      );

      const req = httpTestingController.expectOne(testimonialUrl);
      expect(req.request.method).toEqual('GET');

      req.flush(mockExpectedTestimonials); //Return mockExpectedTestimonials
    });

    it('should be OK returning no question', () => {
      httpService.getOneTestimonial(0).subscribe(
        service => expect(service).toBeFalsy(),
        fail
      );

      const req = httpTestingController.expectOne(testimonialUrl);
      req.flush([]); //Return empty data
    });

    it('should turn 404 error', () => {
      httpService.getOneTestimonial(0).subscribe(
        service => {
          expect(service).toBeTruthy(),
            fail
        }
      );
      ;
      const req = httpTestingController.expectOne(testimonialUrl);

      const msg = '404 error occurred';
      req.flush(msg, { status: 404, statusText: 'No service Found' }); //Return error
    });

    it('should return expected service when called multiple times', () => {
      httpService.getOneTestimonial(0).subscribe();
      httpService.getOneTestimonial(0).subscribe(
        service => expect(service).toEqual(mockExpectedTestimonials[0]),
        fail
      );

      const requests = httpTestingController.match(testimonialUrl);
      expect(requests.length).toEqual(2);

      requests[0].flush([]); //Return Empty body for first call
      requests[1].flush(mockExpectedTestimonials); //Return mockExpectedTestimonials in second call
    });

  });
});
