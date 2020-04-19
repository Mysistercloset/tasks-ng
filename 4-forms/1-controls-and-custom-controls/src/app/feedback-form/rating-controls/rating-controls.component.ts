import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-rating-controls',
  templateUrl: './rating-controls.component.html',
  styleUrls: ['./rating-controls.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RatingControlsComponent,
      multi: true,
    },
  ],
})
export class RatingControlsComponent implements ControlValueAccessor {
  writeValue(): void {}
  registerOnChange() {}
  registerOnTouched(): void {}
}
