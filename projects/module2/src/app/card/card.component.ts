import { IProduct } from 'projects/module2/src/mocks/products';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shop-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  public product!: IProduct;

  @Output()
  public addToCart: EventEmitter<void> = new EventEmitter();

  public addProduct(): void {
    this.addToCart.emit();
  }
}
