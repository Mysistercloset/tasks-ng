import { RatingControlsComponent } from './feedback-form/rating-controls/rating-controls.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FeedbackCardComponent } from './feedback-card/feedback-card.component';
import { StarRatingComponent } from './feedback-card/star-rating/star-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    StarRatingComponent,
    RatingControlsComponent,
    FeedbackFormComponent,
    FeedbackCardComponent,
  ],
  imports: [BrowserModule, MatIconModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatIconModule],
})
export class AppModule {}
