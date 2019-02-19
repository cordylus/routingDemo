import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

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
