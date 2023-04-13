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
});
