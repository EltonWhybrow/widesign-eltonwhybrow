import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { InstaService } from './insta-service.service';

describe('InstaServiceService', () => {
  let service: InstaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(InstaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
