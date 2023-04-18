import { TestBed } from '@angular/core/testing';

import { GuardGuard } from './guard.guard';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('GuardGuard', () => {
  let guard: GuardGuard;
  let routeMock: any = { snapshot: {} };
  let routeStateMock: any = { snapshot: {}, url: '/login' };
  let routerMock: any = { navigate: jasmine.createSpy('navigate') };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: routerMock }
      ],
      imports: [RouterTestingModule]
    });
    guard = TestBed.inject(GuardGuard);
    localStorage.removeItem('token');
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  it('should redirect user to login page when no have token', () => {
    expect(guard.canActivate(routeMock, routeStateMock)).toEqual(false);
    expect(routeMock.navigate).toHaveBeenCalledWith(['/login']);
  });
  it('should access route when user have token', () => {
    const token = 'iasidasdijasdhas';
    localStorage.setItem('token', token)

    expect(guard.canActivate(routeMock, routeStateMock)).toEqual(true)
  })
});
