import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {

  constructor(private location: Location) {
  }

  ngOnInit() {
  }

  navBack() {
    this.location.back();
  }

  navForward() {
    this.location.forward();
  }

}
