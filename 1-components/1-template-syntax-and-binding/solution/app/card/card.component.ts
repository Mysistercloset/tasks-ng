import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../../src/mocks/products';

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
