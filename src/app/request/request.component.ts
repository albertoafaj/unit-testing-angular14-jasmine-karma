import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent {
  constructor(private http: HttpService) { }
  getUsersd() {
    this.http.getUsers().subscribe();
  }
  getUsersById(id: number) {
    this.http.getUsersById(id).subscribe();
  }
}
