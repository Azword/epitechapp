import {Component, Input} from '@angular/core';

/**
 * Generated class for the ProgressBarCreditComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'progress-bar-credit',
  templateUrl: 'progress-bar-credit.html'
})
export class ProgressBarCreditComponent {

  currentWidth = 0;
  intervale;
  @Input('creditGoals') creditGoals: number;
  @Input('currentCredit') currentCredit: number;
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
