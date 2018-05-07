import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {IntraProvider} from "../intra/intra";

/*
  Generated class for the NotificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotificationProvider {

  previousLength: number;

  constructor(public http: HttpClient) {
  }

}
