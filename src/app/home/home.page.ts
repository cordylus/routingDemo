import { Component } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private location: Location) {
  }

  navBack() {
    this.location.back();
  }

  navForward() {
    this.location.forward();
  }

}
