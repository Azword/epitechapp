import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {IntraProvider} from "../../../providers/intra/intra";
import {Module} from "../../../models/Module";

/**
 * Generated class for the ModulesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modules',
  templateUrl: 'modules.html',
})
export class ModulesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public intraProvider: IntraProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModulesPage');
  }

  registerModule(item: Module) {
    // TODO Gérer le Register/Unregister ainsi que le bouton ROuge / Vert
    console.log('Register !');
  }

  unregisterModule(item: Module) {
    console.log('unRegister !');
  }

}
