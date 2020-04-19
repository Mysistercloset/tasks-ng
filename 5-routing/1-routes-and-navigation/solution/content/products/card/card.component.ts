import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../../shared/services/products.service';

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
