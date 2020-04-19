import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '2-directive-pipe/1-common-directives-pipes/src/mocks/products';

@Component({
  selector: 'app-shop-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  public product!: IProduct;

  @Output()
  public addToCart = new EventEmitter();

  public addProduct(): void {
    this.addToCart.emit();
  }
}
