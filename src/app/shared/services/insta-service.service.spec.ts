import { TestBed } from '@angular/core/testing';

import { InstaServiceService } from './insta-service.service';

describe('InstaServiceService', () => {
  let service: InstaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
