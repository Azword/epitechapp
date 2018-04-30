import { NgModule } from '@angular/core';
import { ProgressBarTimeLineComponent } from './progress-bar-time-line/progress-bar-time-line';
import { ProgressBarCreditComponent } from './progress-bar-credit/progress-bar-credit';
@NgModule({
	declarations: [
    ProgressBarTimeLineComponent,
    ProgressBarCreditComponent],
	imports: [],
	exports: [
    ProgressBarTimeLineComponent,
    ProgressBarCreditComponent]
})
export class ComponentsModule {}
