import { TestBed } from '@angular/core/testing';

import { SpyonServiceService } from './spyon-service.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

fdescribe('SpyonServiceService', () => {
  let service: SpyonServiceService;
  const logger = jasmine.createSpy('log');

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SpyonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return a users list', () => {
    const response = [
      { name: 'Alberto', age: 38, email: 'alberto@email.com' },
      { name: 'Erica', age: 38, email: 'erica@email.com' },
      { name: 'Tadashi', age: 30, email: 'tadashi@email.com' },
      { name: 'Bernardo', age: 30, email: 'bernardo@email.com' },
    ]
    spyOn(service, 'getUsers').and.returnValue(of(response));

    service.getUsers().subscribe(res => {
      expect(res).toEqual(response);
    })
  });

  it('should create a jasmine.createSpy method', () => {
    logger('Loguei no sistema');
    expect(logger).toHaveBeenCalledTimes(1);
    expect(logger).toHaveBeenCalledWith('Loguei no sistema');

  });
});
