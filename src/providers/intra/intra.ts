import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {UserProvider} from "../user/user";
import {Module} from "../../models/Module";
import {Project} from "../../models/Project";
import {History} from "../../models/History";
import {Board} from "../../models/Board";

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
  public board: Board;

  constructor(public http: HttpClient, public userProvider: UserProvider) {
    this.getBoard();
    console.log('Hello IntraProvider Provider');
  }

  getBoard() {
    let board: Board = new Board();
    this.http.post(this.userProvider.transitAPIUrl, {url: this.userProvider.intraBaseUrl + this.userProvider.token}).subscribe(
      success => {
        let json = JSON.parse(success.toString());
        board.activites = json.board.activites;
        board.history = json.history;
        board.notes = json.board.notes;
        board.projets = json.board.projets;
        board.modules = json.board.modules;
        board.susies = json.board.susies;
        this.modules = board.modules;
        this.projects = board.projets;
        this.history = board.history;
      },
      error => {
        console.error(error.toString());
      }
    );
  }

}
