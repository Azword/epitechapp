import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  public token = '2f38df47fdad12e6a9cf60ec2f3ded4f47308c55';
  public intraBaseUrl = 'https://intra.epitech.eu/auth-';
  public transitAPIUrl = 'http://51.254.101.209:3000/transit'

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

}
