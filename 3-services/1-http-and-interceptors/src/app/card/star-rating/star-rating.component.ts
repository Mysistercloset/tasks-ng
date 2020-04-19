import { Component } from '@angular/core';

export enum StarsIcon {
  FILLED = 'star',
  HALF = 'star_half',
  BORDERED = 'star_border',
}

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.sass'],
})
export class StarRatingComponent {}

