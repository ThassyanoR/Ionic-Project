import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartelaPage } from '../cartela/cartela';


@IonicPage()
@Component({
  selector: 'page-confirma-dados',
  templateUrl: 'confirma-dados.html',
})
export class ConfirmaDadosPage {

  constructor(public nav: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmaDadosPage');
  }

   // go to cartela page
   escolherNumeros(){
    this.nav.push(CartelaPage);
  }


}
