import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-setting',
  templateUrl: './home-setting.component.html',
  styleUrls: ['./home-setting.component.less']
})
export class HomeSettingComponent implements OnInit {

  switchValue = false;
  value2 = 1;
  @Output() checkedBack = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  btn() {
    this.switchValue = !this.switchValue;
    console.log(this.switchValue)
    this.checkedBack.emit(this.switchValue)
  }

  ngModelChangeBtn(event) {
    console.log(this.value2)
  }
}
