import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-asynchronous-component',
  templateUrl: './asynchronous-component.component.html',
  styleUrls: ['./asynchronous-component.component.scss']
})
export class AsynchronousComponentComponent {
  data: any;
  dataPromise: any;
  isLogged: any;
  name!: string;
  constructor(private http: HttpService) { };
  getUsers() {
    this.http.getUsers().subscribe(res => {
      this.data = res;
    });
  };
  getUsersWithPromise() {
    this.http.getUsersWithPromise().then(res => {
      console.log('res then -->>', res)
      this.dataPromise = res;
    })
  };
  isAuthenticaded() {
    this.http.isAuthenticated().then(res => {
      this.isLogged = res;
    });
  };
  defineValue() {
    this.name = 'Danilo';
    setTimeout(() => {
      this.name = 'Jessica'
    }, 100)
  };


}
