import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent {
  name!: string;
  email!: string;
  age!: string;
  constructor(private http: HttpService) { };
  getUsersd() {
    this.http.getUsers().subscribe();
  };
  getUsersById(id: number) {
    this.http.getUsersById(id).subscribe();
  };
  postUsers() {
    const user = {
      id: Math.random(),
      name: this.name,
      email: this.email,
      age: this.age
    };
    this.http.postUser(user).subscribe();
  };
  putUsers(id: any) {
    const user = {
      name: this.name,
      email: this.email,
      age: this.age
    };
    this.http.putUser(id, user).subscribe();
  }
  deleteUser(id: number) {
    return this.http.deleteUser(id).subscribe();
  }
  getUsersWithHeaders() {
    this.http.getUserWithHeaders().subscribe();
  }
}
