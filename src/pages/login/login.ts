import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private error = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private inAppBrowser: InAppBrowser, private storage: Storage, private alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  submit(formData) {
    let autoLogin: string = formData.form.value.autoLogin;
    if (autoLogin && autoLogin.match('https://intra.epitech.eu')) {
      if (autoLogin.match('/auth-')) {
        this.alertCtrl.create({
          title: "Vérification",
          subTitle: "Votre token est donc : {" + this.extractToken(autoLogin) + "} ?",
          buttons: [
            {
              text: 'Oui',
              handler: data => {
                this.storage.set("autoLogin", this.extractToken(autoLogin));
                this.navCtrl.push(TabsPage);
                this.navCtrl.setRoot(TabsPage);
              }
            },
            {
              text: 'Non',
              handler: data => {
              }
            }
          ]
        }).present();
      } else {
        this.error = "Votre lien n'est pas valide.";
      }
    } else {
      this.error = "Vous devez spécifier l'url complète !";
    }
    if (this.error.length > 3) {
      this.alertCtrl.create({
        "title": "Oops !",
        "subTitle": this.error,
        "buttons": ['OK']
      }).present();
      this.error = '';
    }
  }

  extractToken(link) {
    let token;
    token = link.substring(30, link.length);
    return (token);
  }

  openAutoLoginWebPage() {
    this.inAppBrowser.create("https://intra.epitech.eu/admin/autolog", "_system").show();
  }


}
