import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AsynchronousComponentComponent } from './asynchronous-component.component';
import { HttpService } from '../services/http.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

fdescribe('AsynchronousComponentComponent', () => {
  let component: AsynchronousComponentComponent;
  let fixture: ComponentFixture<AsynchronousComponentComponent>;
  let http: HttpService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsynchronousComponentComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AsynchronousComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    http = TestBed.inject(HttpService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make a request to get a list of users', () => {
    const response = [
      {
        "name": "Danilo 2",
        "email": "danilo@gmail.com",
        "age": "30",

        "id": 1
      },
      {
        "id": 3,
        "name": "Joao",
        "email": "joao@gmail.com",
        "age": 22
      },
      {
        "id": 4,
        "name": "Joao",
        "email": "joao@gmail.com",
        "age": 22
      },
      {
        "id": 0.8230837961873159,
        "name": "Danilo ",
        "email": "danilo@gmail.com",
        "age": "30"
      }
    ];

    spyOn(http, 'getUsers').and.returnValue(of(response))

    component.getUsers();

    expect(component.data).toEqual(response)
  })

  it('should make call to get list of users with promise', async () => {
    const response = [
      {
        "name": "Danilo 2",
        "email": "danilo@gmail.com",
        "age": "30",
        "id": 1
      },
      {
        "id": 3,
        "name": "Joao",
        "email": "joao@gmail.com",
        "age": 22
      },
      {
        "id": 4,
        "name": "Joao",
        "email": "joao@gmail.com",
        "age": 22
      },
      {
        "id": 0.8230837961873159,
        "name": "Danilo ",
        "email": "danilo@gmail.com",
        "age": "30"
      }
    ]

    spyOn(http, 'getUsersWithPromise').and.returnValue(Promise.resolve(response))

    await component.getUsersWithPromise()

    expect(component.dataPromise).toEqual(response)
  });

  it('should login the user', (done: DoneFn) => {
    const loggedOut = fixture.debugElement.query(By.css('.logged-out')).nativeElement

    let spy = spyOn(http, 'isAuthenticated').and.returnValue(Promise.resolve(true))

    component.isAuthenticaded()

    spy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();
      const logged = fixture.debugElement.query(By.css('.logged')).nativeElement
      expect(logged.textContent).toBe('Logado')
      done();
    })
    expect(loggedOut.textContent).toBe('Deslogado')
  })

  it('should login the user with whenStable', async () => {
    const loggedOut = fixture.debugElement.query(By.css('.logged-out')).nativeElement

    expect(loggedOut.textContent).toBe('Deslogado')

    spyOn(http, 'isAuthenticated').and.returnValue(Promise.resolve(true))

    component.isAuthenticaded()

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const logged = fixture.debugElement.query(By.css('.logged')).nativeElement
      expect(logged.textContent).toBe('Logado')

    })
  });

  it('should define name', fakeAsync(() => {
    component.defineValue();
    tick(100);
    expect(component.name).toBe('Jessica')
  }));
});
