import { Component } from '@angular/core';


import {HomePage} from "../home/home";
import {AboutPage} from "../about/about";
import {AccountPage} from "../account/account";
import {SettingsPage} from "../settings/settings";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AccountPage;
  tab3Root = SettingsPage;
  tab4Root = AboutPage;

  constructor() {

  }
}
