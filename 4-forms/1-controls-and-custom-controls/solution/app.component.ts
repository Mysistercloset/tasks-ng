import { Component } from '@angular/core';
import { IFeedback } from '../src/mocks/feedbacks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public feedbacks: IFeedback[] = [];
  public getFormInfo(value: IFeedback) {
    this.feedbacks.push(value);
  }
}
