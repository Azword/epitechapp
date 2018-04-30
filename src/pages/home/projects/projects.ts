import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {IntraProvider} from "../../../providers/intra/intra";
import {ProjectDetailsPage} from "./project-details/project-details";

/**
 * Generated class for the ProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public intraProvider: IntraProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsPage');
  }

  openProjectDetailsPage(i) {
    let project = this.intraProvider.projects[i];
    this.navCtrl.push(ProjectDetailsPage, {project: project}).catch((error) => console.error(error.toLocaleString()));
  }

}
