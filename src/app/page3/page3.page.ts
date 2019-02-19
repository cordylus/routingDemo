import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Location} from '@angular/common';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {

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
