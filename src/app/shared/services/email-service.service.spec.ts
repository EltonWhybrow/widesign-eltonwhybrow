import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { EmailService } from './email-service.service';
import { environment } from '../../../environments/environment';
import { IEmail } from '../models/emails-interface';
// import { HttpService } from './http-service.service';

const NODE_BASE_URL = environment.nodeBaseUrl;

describe('EmailService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let emailService: EmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],

    });
    emailService = TestBed.inject(EmailService);
    httpTestingController = TestBed.inject(HttpTestingController);
    // httpService = TestBed.inject(HttpService);
  });

  afterEach(() => {
    httpTestingController.verify(); //Verifies that no requests are outstanding.
  });

  describe('sendEmail', () => {
    let mockEmailData: IEmail;
    let emailUrl: string;

    beforeEach(() => {
      emailUrl = '/forms/contact-us';
      mockEmailData =
      {
        contactName: 'Elton',
        contactNumber: '1234',
        contactEmail: 'elton@test.com',
        contactMessage: 'message',
      }
    });

    it('should return expected data by calling once', () => {
      emailService.sendEmail(emailUrl, mockEmailData).subscribe(
        service => {
          // console.log('>>>LOG>>>', service);
          // console.log('>>>LOG>>>', mockEmailData);
          expect(service).toEqual(mockEmailData),
            fail
        }
      );

      const req = httpTestingController.expectOne(`${NODE_BASE_URL}${emailUrl}`);
      expect(req.request.method).toEqual('POST');

      req.flush(mockEmailData); //Return mockEmailData
    });
  });
});
