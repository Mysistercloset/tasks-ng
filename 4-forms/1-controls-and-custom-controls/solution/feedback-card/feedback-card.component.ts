import { Component, Input } from '@angular/core';
import { IFeedback } from '../../mocks/feedbacks';

@Component({
  selector: 'app-feedback-card',
  templateUrl: './feedback-card.component.html',
  styleUrls: ['./feedback-card.component.scss'],
})
export class FeedbackCardComponent {
  @Input()
  public feedback!: IFeedback;
}
