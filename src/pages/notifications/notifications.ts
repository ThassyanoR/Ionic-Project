import {Component} from "@angular/core";
import {ViewController, NavController} from "ionic-angular";
import { HomePage } from "../home/home";

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html'
})

export class NotificationsPage {
  constructor(public viewCtrl: ViewController,public nav:NavController) {}

  close() {
    this.viewCtrl.dismiss();
  }
  
}
