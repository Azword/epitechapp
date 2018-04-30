import {Project} from "./Project";
import {Module} from "./Module";
import {History} from "./History";

export class Board {
  projets: Project[];
  notes: any;
  susies: any;
  activites: any;
  modules: Module[];
  history: History[];
  current: [{}];
}
