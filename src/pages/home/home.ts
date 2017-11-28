import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LifecycleEventsPage } from '../lifecycle-events/lifecycle-events';
import { PaginacaoPage } from './../paginacao/paginacao';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  pushPage(){
    this.navCtrl.push(PaginacaoPage);
  }

  lifecycle(){
    this.navCtrl.push(LifecycleEventsPage);
  }

}
