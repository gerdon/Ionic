import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LifecycleEventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lifecycle-events',
  templateUrl: 'lifecycle-events.html',
})
export class LifecycleEventsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //Antes de poder carregar a página
  ionViewCanEnter(){
    console.log('01 ionViewCanEnter called');
  }

  //Quando a página estiver pronta para carregar
  ionViewDidLoad() {
    console.log('02 ionViewDidLoad called');
  }

  //Quando estiver entrando na página
  ionViewWillEnter(){
    console.log('03 ionViewWillEnter called');
  }

  //Quando a página estiver totalmente carregada
  ionViewDidEnter(){
    console.log('04 ionViewdidEnter called');
  }

  //Quando poder sair da página
  ionViewCanLeave(){
    console.log('05 ionViewCanLeave called');
  }

  //Quando estiver pronto para sair da página
  ionViewWillLeave(){
    console.log('06 ionViewWillLeave called');
  }

  //Quando estiver saindo da página
  ionViewDidLeave(){
    console.log('07 ionViewDidLeave called');
  }

  //Quando estiver saído
  ionViewWillUnload(){
    console.log('08 ionViewWillUnload called');
  }



}
