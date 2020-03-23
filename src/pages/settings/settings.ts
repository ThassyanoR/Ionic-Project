import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {LoginPage} from "../login/login";
import { HomePage } from "../home/home";


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public nav: NavController) {
  }

  // logout
  logout() {
    this.nav.setRoot(LoginPage);
  }
  goHome(){
    this.nav.setRoot(HomePage);
  }
}
