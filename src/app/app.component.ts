import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'YZS-ANGULAR';
  type: boolean;

  checkedBackBtn(event) {
    console.log('子组件', event)
    this.type = event;
  }
}
