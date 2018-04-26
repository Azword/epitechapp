import {Component, Input} from '@angular/core';

/**
 * Generated class for the ProgressBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBarComponent {

  currentWidth = 0;
  intervale;
  @Input('maxValue') maxValue: number;
  @Input('currentValue') currentValue: number;
  @Input('token') token: string;
  @Input('width') width: number;

  constructor() {
    console.log('Hello ProgressBarComponent Component');
    this.intervale = setInterval(() => {
      if (this.currentWidth < this.width) {
        this.currentWidth++;
      } else {
        clearInterval(this.intervale);
      }
    }, 10);
  }

}
