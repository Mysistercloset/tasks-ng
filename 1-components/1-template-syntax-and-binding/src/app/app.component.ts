import { IProduct, product } from 'projects/module1/src/mocks/products';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  public product: IProduct = product;
  public chosenProduct!: IProduct;

  public addProduct(chosenProduct: IProduct): void {
    this.chosenProduct = chosenProduct;
  }
}
