import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StarRatingComponent } from './card/star-rating/star-rating.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';
import { ImgUrlPipe } from './card/img-url.pipe';

@NgModule({
  declarations: [AppComponent, StarRatingComponent, CardComponent, ImgUrlPipe],
  imports: [BrowserModule, BrowserAnimationsModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
