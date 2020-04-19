import { Component, OnInit } from '@angular/core';
import { ProductsService, IProduct } from './products.service';
import { Observable } from 'rxjs';
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
    this.products$.subscribe(x => (this.products = x));
    console.log(this.products);
  }
  public addProduct(_product: IProduct) {}
}
