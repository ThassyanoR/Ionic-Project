import { Component } from '@angular/core';
import {IonicPage,NavController,PopoverController,NavParams,ActionSheetController } from 'ionic-angular';

import {NotificationsPage} from "../notifications/notifications";
import {SettingsPage} from "../settings/settings";

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  constructor(public navCtrl:NavController,public nav: NavController,public navParams: NavParams,public popoverCtrl: PopoverController, public actionSheetController:ActionSheetController){

  }
  ionViewDidLoad(){
    console.log('ionViewDidLoad FeedPage')
  }
  // to go account page
  goToAccount() {
    this.nav.push(SettingsPage);
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
      }, 
        {
        text: 'Visualizar minhas rifas',
        icon: 'md-document',
        handler: () => {
          console.log('Visualizar clicked');
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
  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }
}
