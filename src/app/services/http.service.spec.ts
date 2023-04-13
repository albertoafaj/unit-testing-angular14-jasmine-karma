import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

fdescribe('HttpService', () => {
  let service: HttpService;
  let htppTestingController: HttpTestingController;
  let url: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HttpService);
    htppTestingController = TestBed.inject(HttpTestingController)
    url = 'http://localhost:3000';
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should execute GET call by ID', () => {
    const id = 3;
    service.getUsersById(id).subscribe();
    const request = htppTestingController.expectOne(`${url}/users/${id}`)
    expect(request.request.method).toBe('GET');
    expect(request.request.url).toBe(`${url}/users/${id}`);
  });
  it('should execute GET call', () => {
    const response = [{
      "id": 3,
      "name": "Alberto"
    }]
    service.getUsers().subscribe();
    const request = htppTestingController.expectOne(`${url}/users`)
    request.flush(response);
    service.getUsers().subscribe(res => {
      expect(res).toBe(response);
    })
    expect(request.request.method).toBe('GET');
    expect(request.request.url).toBe(`${url}/users`);
  });
  it('should throw an error when trying to get users', () => {
    service.getUsers().subscribe({
      error: (erro) => {
        expect(erro.status).toBe(500);
      }
    });
    const request = htppTestingController.expectOne(`${url}/users`)
    request.flush(500, {
      status: 500,
      statusText: 'Erro de rede'
    });
    expect(request.request.method).toBe('GET');
    expect(request.request.url).toBe(`${url}/users`);
  });
  it('should make a POST request to register a user', () => {
    const user = { "id": 0.18013741332928745, "name": "Neide", "email": "neide@gmail.com", "age": "40" };
    const response = {
      "id": 0.18013741332928745,
      "name": "Neide",
      "email": "neide@gmail.com",
      "age": "40"
    }
    service.postUser(user).subscribe(res => {
      expect(res).toBe(response)
    })

    const request = htppTestingController.expectOne(`${url}/users`)
    expect(request.request.method).toBe('POST')
    request.flush(response)
  })
  it('should update PUT user', () => {
    const id = 1;
    const user = { "name": "Rafeal", "email": "rafael@gmail.com", "age": "22" }
    const response = { "name": "Rafeal", "email": "rafael@gmail.com", "age": "22" }

    service.putUser(id, user).subscribe(res => {
      expect(res).toBe(response)
    })

    const request = htppTestingController.expectOne(`${url}/users/${id}`)
    expect(request.request.method).toBe('PUT')
    expect(request.request.url).toBe(`${url}/users/${id}`)

    request.flush(response)

  })
  it('should remove DELETE user', () => {
    const id = 2;
    const response = {};
    service.deleteUser(id).subscribe(res => {
      expect(res).toBe(response);
    });
    const request = htppTestingController.expectOne(`${url}/users/${id}`);

    expect(request.request.method).toBe('DELETE');

    expect(request.request.url).toBe(`${url}/users/${id}`);

    request.flush(response);

  });
});
