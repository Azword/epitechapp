import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";
import {IntraProvider} from "../../providers/intra/intra";
import {ModulesPage} from "./modules/modules";
import {ProjectsPage} from "./projects/projects";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider, public intraProvider: IntraProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  openProjectsPage() {
    this.navCtrl.push(ProjectsPage);
  }

  openModulesPage() {
    this.navCtrl.push(ModulesPage);
  }

}
