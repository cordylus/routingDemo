import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

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
