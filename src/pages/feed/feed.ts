import { Component } from '@angular/core';
import {IonicPage,NavController,NavParams,ActionSheetController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  constructor(public navCtrl:NavController,public navParams: NavParams,public actionSheetController:ActionSheetController){

  }
  ionViewDidLoad(){
    console.log('ionViewDidLoad FeedPage')
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
}
