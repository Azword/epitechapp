import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HomePage} from "../pages/home/home";
import {AboutPage} from "../pages/about/about";
import {AccountPage} from "../pages/account/account";
import {SettingsPage} from "../pages/settings/settings";
import {CreditPage} from "../pages/home/credit/credit";
import {HistoryPage} from "../pages/home/history/history";
import {ModulesPage} from "../pages/home/modules/modules";
import {NewsPage} from "../pages/home/news/news";
import {ProjectsPage} from "../pages/home/projects/projects";
import { NewsProvider } from '../providers/news/news';
import { IntraProvider } from '../providers/intra/intra';
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {LoginPage} from "../pages/login/login";
import { UserProvider } from '../providers/user/user';
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {ProgressBarComponent} from "../components/progress-bar/progress-bar";
import {ProjectDetailsPage} from "../pages/home/projects/project-details/project-details";

@NgModule({
  declarations: [
    MyApp,
    AccountPage,
    SettingsPage,
    HomePage,
    AboutPage,
    TabsPage,
    CreditPage,
    HistoryPage,
    ModulesPage,
    NewsPage,
    ProjectsPage,
    LoginPage,
    ProgressBarComponent,
    ProjectDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountPage,
    SettingsPage,
    HomePage,
    AboutPage,
    TabsPage,
    CreditPage,
    HistoryPage,
    ModulesPage,
    NewsPage,
    ProjectsPage,
    LoginPage,
    ProgressBarComponent,
    ProjectDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewsProvider,
    IntraProvider,
    InAppBrowser,
    UserProvider
  ]
})
export class AppModule {}
