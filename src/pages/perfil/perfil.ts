import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlterarPage } from '../alterar_perfil/alterar';
import { MinhasRifasPage } from '../minhas-rifas/minhas-rifas';
import { FavoritosPage } from '../favoritos/favoritos';



@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  constructor(public nav: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  goHome(){
    this.nav.setRoot(HomePage);
  }
  goAlterar() {
    this.nav.setRoot(AlterarPage);
  }
  goMinhasRifas() {
    this.nav.setRoot(MinhasRifasPage);
  }
  goFavoritos(){
    this.nav.setRoot(FavoritosPage);
  }
}
