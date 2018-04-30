import {Component, Input} from '@angular/core';

/**
 * Generated class for the ProgressBarTimeLineComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'progress-bar-time-line',
  templateUrl: 'progress-bar-time-line.html'
})
export class ProgressBarTimeLineComponent {

  currentWidth = 0;
  intervale;
  @Input('startDate') startDate: string;
  @Input('endDate') endDate: string;
  @Input('type') type: string;
  @Input('width') width: number;

  constructor() {
    this.intervale = setInterval(() => {
      if (this.currentWidth < this.width) {
        this.currentWidth++;
      } else {
        clearInterval(this.intervale);
      }
    }, 10);
  }


  ionViewDidLoad() {
    this.currentWidth = 0;
  }

}
