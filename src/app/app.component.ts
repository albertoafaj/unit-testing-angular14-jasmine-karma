import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'unit-testing-angular14-jasmine-karma';
  user: object | undefined;

  ngOnInit(): void {
    this.user = {
      name: 'Alberto',
      email: 'alberto@email.com',
      passwd: '123'
    };
  }

  getUserMessage(event: any) {
    console.log('Mensagem do filho: ', event)
  }
}
