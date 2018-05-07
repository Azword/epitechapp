import { Component } from '@angular/core';


import {HomePage} from "../home/home";
import {AboutPage} from "../about/about";
import {AccountPage} from "../account/account";
import {SettingsPage} from "../settings/settings";
import {HistoryPage} from "../history/history";
import {IntraProvider} from "../../providers/intra/intra";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AccountPage;
  tab3Root = HistoryPage;
  tab4Root = AboutPage;

  constructor(private intraProvider: IntraProvider) {

  }
}
