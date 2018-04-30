import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Project} from "../../../../models/Project";
import {IntraProvider} from "../../../../providers/intra/intra";
import {ProjectDetails} from "../../../../models/ProjectDetails";
import {InAppBrowser} from "@ionic-native/in-app-browser";

/**
 * Generated class for the ProjectDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-project-details',
  templateUrl: 'project-details.html',
})
export class ProjectDetailsPage {

  project: Project;

  constructor(public navCtrl: NavController, public navParams: NavParams, public intraProvider: IntraProvider, public inAppBrowser: InAppBrowser) {
    this.project = this.navParams.get('project');
  }

  openFileBrowser() {
    this.inAppBrowser.create(this.intraProvider.userProvider.intraBaseUrl + this.intraProvider.userProvider.token + this.project.title_link + "project/file", '_system');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectDetailsPage');
  }

}
