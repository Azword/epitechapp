import {HistoryUser} from "./HistoryUser";

export class History {
  title: string = 'noTitle';
  user: HistoryUser;
  content: string = 'noContent';
  date: Date = null;
  id: number = -1;
  visible: boolean = true;
  id_activite: number = -1;
  class: string = 'noClass';
}
