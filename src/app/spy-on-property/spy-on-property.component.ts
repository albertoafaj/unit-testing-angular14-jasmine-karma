import { Component } from '@angular/core';

@Component({
  selector: 'app-spy-on-property',
  templateUrl: './spy-on-property.component.html',
  styleUrls: ['./spy-on-property.component.scss']
})
export class SpyOnPropertyComponent {
  mensagem: string = 'Olá, mundo!'

  get message(): string {
    return this.mensagem;
  }

}
