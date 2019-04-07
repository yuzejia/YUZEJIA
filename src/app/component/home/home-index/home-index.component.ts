import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.less']
})
export class HomeIndexComponent implements OnInit {
  isCollapsed = false;
  isReverseArrow = false;
  width = 200;
  visible = false;

  @Output() checkedBack = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {

  }

  // 打开设置页
  open(): void {
    this.visible = true;
  }
  // 关闭 设置页
  close(): void {
    this.visible = false;
  }



  goto() { }

  checkedBackBtn(event: boolean) {
    this.checkedBack.emit(event)
  }

}
