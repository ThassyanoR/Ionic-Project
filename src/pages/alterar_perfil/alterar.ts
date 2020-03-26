import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { findLast } from '@angular/compiler/src/directive_resolver';
import { PerfilPage } from '../perfil/perfil';


@IonicPage()
@Component({
  selector: 'page-alterar',
  templateUrl: 'alterar.html',
})
export class AlterarPage {
  

  constructor(public nav: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlterarPage');
  }
  goHome(){
    this.nav.setRoot(HomePage);
  }
  historyRoot(){
    this.nav.setRoot(PerfilPage);
  }
  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirmar alterações ?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirmar',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }
  
}
