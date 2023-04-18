import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent {
  constructor(private router: Router) { }
  navigateUrl(url: string) {
    this.router.navigate([`/${url}`]);
  }

}
