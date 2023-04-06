import { Component } from '@angular/core';

@Component({
  selector: 'app-spyon',
  templateUrl: './spyon.component.html',
  styleUrls: ['./spyon.component.scss']
})
export class SpyonComponent {
  logged!: boolean;

  isLogged() {
    this.logged = true;
  }
}
