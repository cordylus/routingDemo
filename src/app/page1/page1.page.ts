import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Location} from '@angular/common';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  ngOnInit() {
  }

  constructor(
    public navCtrl: NavController,
    private location: Location) {
  }


  navPage(path:string) {
    this.navCtrl.navigateForward(path);
  }

  navBack() {
    this.navCtrl.back();
  }
}
