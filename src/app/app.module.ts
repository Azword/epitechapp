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
import {HistoryPage} from "../pages/history/history";
import {ModulesPage} from "../pages/home/modules/modules";
import {NewsPage} from "../pages/home/news/news";
import {ProjectsPage} from "../pages/home/projects/projects";
import { NewsProvider } from '../providers/news/news';
import { IntraProvider } from '../providers/intra/intra';
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {LoginPage} from "../pages/login/login";
import { UserProvider } from '../providers/user/user';
import {HttpClientModule} from "@angular/common/http";
import {ProjectDetailsPage} from "../pages/home/projects/project-details/project-details";
import {IonicStorageModule} from "@ionic/storage";
import {ProgressBarCreditComponent} from "../components/progress-bar-credit/progress-bar-credit";
import {ProgressBarTimeLineComponent} from "../components/progress-bar-time-line/progress-bar-time-line";
import { NotificationProvider } from '../providers/notification/notification';
import {LocalNotifications} from "@ionic-native/local-notifications";
import {BackgroundMode} from "@ionic-native/background-mode";


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
    HistoryPage,
    ProjectsPage,
    LoginPage,
    ProgressBarCreditComponent,
    ProgressBarTimeLineComponent,
    ProjectDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
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
    HistoryPage,
    ProgressBarCreditComponent,
    ProgressBarTimeLineComponent,
    ProjectDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewsProvider,
    IntraProvider,
    InAppBrowser,
    LocalNotifications,
    BackgroundMode,
    UserProvider,
    NotificationProvider,
  ]
})
export class AppModule {}
