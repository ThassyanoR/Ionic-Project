import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController} from 'ionic-angular';
import { RifaCompradaPage } from '../rifa-comprada/rifa-comprada';
import { TripService } from '../../services/trip-service';
import { HomePage } from '../home/home';
import { RifaPremiadaPage } from '../rifa-premiada/rifa-premiada';


@IonicPage()
@Component({
  selector: 'page-minhas-rifas',
  templateUrl: 'minhas-rifas.html',
})
export class MinhasRifasPage {
 
  public trips: any;

  public tab = 'todas';

  constructor(public nav: NavController, public navParams: NavParams,  public tripService: TripService,public actionSheetController:ActionSheetController) {
    this.trips = tripService.getAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MinhasRifasPage');
  }

  VerRifaComprada() {
    this.nav.push(RifaCompradaPage);
  }

  goHome(){
    this.nav.setRoot(HomePage);
  }

  VerRifaPremiada(){
    this.nav.push(RifaPremiadaPage);
  }
  presentActionSheet() {
    const actionSheet = this.actionSheetController.create({ 
      title:'Adicionar uma Rifa ',
        buttons: [{   
        text: 'Criar uma Rifa',
        icon: 'md-add',
        handler: () => {
          console.log('Adicionar clicked');
        }
      }, {
        text: 'Rifas desejadas',
        icon: 'heart',
        handler: () => {
          console.log('Wishlist clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    actionSheet.present();
  }


}
