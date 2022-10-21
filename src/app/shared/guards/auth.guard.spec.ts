import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthGuard } from './auth.guard';
import { AuthService } from '../services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { NotAuthorisedComponent } from 'src/app/features/auth/pages/not-authorised/not-authorised.component';

let mockAuthService: any;

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {

    mockAuthService = jasmine.createSpyObj(['isloggedIn']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: mockAuthService }
      ]
    });
    guard = TestBed.inject(AuthGuard);

    RouterTestingModule.withRoutes([
      { path: 'login/not-authorised', component: NotAuthorisedComponent }
    ])
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('disallow access if logged in is false', () => {
    mockAuthService.isloggedIn.and.returnValue(false);
    const res = guard.canActivate();
    expect(res).toBeFalsy();
  });


  // TODO: Problem with routes and promise take a look later
  // it('allow access through guard if role is admin', () => {
  //   mockAuthService.isloggedIn.and.returnValue(true);
  //   const res = guard.canActivate();
  //   expect(res).toBeTrue();
  // });
});
