import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {UserProvider} from "../user/user";
import {Module} from "../../models/Module";
import {Project} from "../../models/Project";
import {History} from "../../models/History";
import {Board} from "../../models/Board";
import {Storage} from '@ionic/storage';
import {UserProfil} from "../../models/UserProfil";


/*
  Generated class for the IntraProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IntraProvider {

  public modules: Module[];
  public projects: Project[];
  public history: History[];
  public userProfil: UserProfil;
  public board: Board;

  constructor(public http: HttpClient, public userProvider: UserProvider, public storage: Storage) {
    this.getBoard(true);
    this.getUserProfil(true);
  }

  getProject(title) {
    let n = this.projects.indexOf(title);
    return (this.projects[n]);
  }

  getUserProfil(cache: boolean) {
    if (cache) {
      this.storage.get('userProfil').then((json) => {
        this.userProfil = json;
      });
    }
    this.http.post(this.userProvider.transitAPIUrl, {url: this.userProvider.intraBaseUrl + this.userProvider.token + '/user'}).subscribe(
      success => {
        let json = JSON.parse(success.toString());
        this.userProfil = json;
        this.storage.remove('userProfil').then(() => {
          this.storage.set('userProfil', json);
        }).catch(() => {
          this.storage.set('userProfil', json);
        });
      },
      error => {
        console.error(error.toString());
      }
    );
  }

  getBoard(cache: boolean) {
    let board: Board = new Board();
    if (cache) {
      this.storage.get('board').then((json) => {
        this.fillBoard(board, json);
        this.modules = board.modules;
        this.projects = board.projets;
        this.history = board.history;
      });
    }
    this.http.post(this.userProvider.transitAPIUrl, {url: this.userProvider.intraBaseUrl + this.userProvider.token}).subscribe(
      success => {
        let json = JSON.parse(success.toString());
        this.fillBoard(board, json);
        this.modules = board.modules;
        this.projects = board.projets;
        this.history = board.history;
        this.storage.remove('board').then(() => {
          this.storage.set('board', json);
        }).catch(() => {
          this.storage.set('board', json);
        });
      },
      error => {
        console.error(error.toString());
      }
    );
  }

  fillBoard(board, json) {
    if (json && json.board) {
      board.activites = json.board.activites;
      board.history = json.history;
      board.notes = json.board.notes;
      board.projets = json.board.projets;
      board.modules = json.board.modules;
      board.susies = json.board.susies;
      board.current = json.current;
      this.board = board;
    }
  }

  registerModule(m: Module) {
    console.log(this.userProvider.intraBaseUrl + this.userProvider.token + m.title_link + 'register?format=json');
    this.http.post(this.userProvider.transitAPIUrl, {
      url: this.userProvider.intraBaseUrl + this.userProvider.token + m.title_link + 'register?format=json',
      method: 'POST'
    }).subscribe(
      success => {
        console.log(success);
      },
      error => {

      }
    )
  }

  unregisterModule(m: Module) {
    console.log(this.userProvider.intraBaseUrl + this.userProvider.token + m.title_link + 'register?format=json');
    this.http.post(this.userProvider.transitAPIUrl, {
      url: this.userProvider.intraBaseUrl + this.userProvider.token + m.title_link + 'unregister?format=json',
      method: 'POST'
    }).subscribe(
      success => {
        console.log(success);
      },
      error => {

      }
    )
  }

  refreshData(event) {
    this.getBoard(false);
    this.getUserProfil(false);
    setTimeout(() => {
      event.complete();
    }, 2000);
  }

}
