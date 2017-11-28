import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AboutPage } from './../about/about';

/**
 * Generated class for the PaginacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paginacao',
  templateUrl: 'paginacao.html',
})
export class PaginacaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaginacaoPage');
    console.log(this.navParams);
  }

  //Push page
  pushPage(){
   this.navCtrl.push(PaginacaoPage); 
  }

  //Push page passando paramentros
  pushPageParam(){
    this.navCtrl.push(PaginacaoPage, {type: "push"}); 
   }

  //Volta a page anterior (Desempilar)
  popPage(){
    this.navCtrl.pop();
   }

  //Ir a pagina root do app
  homePage(){
    console.log();
    this.navCtrl.popToRoot();
  }

  aboutPage(){
    this.navCtrl.push(AboutPage);
  }



}
