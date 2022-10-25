import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthService } from '../services/auth.service';

import { RoleGuard } from './role.guard';

let mockAuthService: any;

describe('RoleGuard', () => {
  let guard: RoleGuard;

  beforeEach(() => {
    mockAuthService = jasmine.createSpyObj(['getUserRole']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        RoleGuard,
        { provide: AuthService, useValue: mockAuthService }
      ]
    });
    guard = TestBed.inject(RoleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('allow access through guard if role is admin', () => {
    mockAuthService.getUserRole.and.returnValue('ROLE_ADMIN');
    const res = guard.canActivate();
    expect(res).toBeTruthy();
  });

  it('disallow access and navigate away if guard if role is not admin', () => {
    mockAuthService.getUserRole.and.returnValue('ROLE_GUEST');
    const res = guard.canActivate();
    expect(res).toBeFalsy();
  });
});
