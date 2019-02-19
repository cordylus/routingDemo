import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Location} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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
