import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { IProduct, ProductsService } from '../src/app/products.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public products: IProduct[] = [];
  public products$!: Observable<IProduct[]>;
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products$ = this.productsService.getProducts();
  }
  public addProduct(_product: IProduct) {}
}
