import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsynchronousComponentComponent } from './asynchronous-component.component';
import { HttpService } from '../services/http.service';
import { of } from 'rxjs';

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

});
