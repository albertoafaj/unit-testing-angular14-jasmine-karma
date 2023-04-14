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


}
