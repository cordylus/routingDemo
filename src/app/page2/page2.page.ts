import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Location} from '@angular/common';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

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
