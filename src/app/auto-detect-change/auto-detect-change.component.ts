import { Component } from '@angular/core';

@Component({
  selector: 'app-auto-detect-change',
  templateUrl: './auto-detect-change.component.html',
  styleUrls: ['./auto-detect-change.component.scss']
})
export class AutoDetectChangeComponent {
  title: string = 'Learning to use fixture.autoDetectChange()';
  newTitle: string = '';

  updateTitle() {
    this.title = this.newTitle;
  }
}
