import { IProduct, products } from 'projects/module2/src/mocks/products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public products: IProduct[] = products;
  public chosenProduct!: IProduct;

  public addProduct(chosenProduct: IProduct): void {
    this.chosenProduct = chosenProduct;
  }

  ngOnInit() {
    console.log(products);
  }
}
