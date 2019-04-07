import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.less']
})
export class HomeContentComponent implements OnInit {

  constructor(
    private Http: HttpClient,

  ) { }

  ngOnInit() {
    this.getData()
  }

  getData() {
   this.Http.get('assets/data/test.json').subscribe(
    data => {
      console.log(data)
    }
  );
  }
}
