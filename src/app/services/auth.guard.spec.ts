import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authServiceMock: jasmine.SpyObj<any>;
  let routerMock: jasmine.SpyObj<any>;

  beforeEach(() => {
    authServiceMock = {getUser: jasmine.createSpy()};
    routerMock = {navigate: jasmine.createSpy()};
    TestBed.configureTestingModule({
      providers: [
        {provide: AuthService, useValue: authServiceMock},
        {provide: Router, useValue: routerMock},
      ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should navigate if user is not logged in', () => {
    authServiceMock.getUser.and.returnValue(null);
    guard.canActivate();
    expect(routerMock.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should return true if user is logged in', () => {
    authServiceMock.getUser.and.returnValue({});
    expect(guard.canActivate()).toBe(true);
  });
});
