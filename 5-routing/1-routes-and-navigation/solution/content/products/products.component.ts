import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IProduct, ProductsService } from '../../shared/services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass'],
})
export class ProductsComponent implements OnInit {
  public products: IProduct[] = [];
  public products$!: Observable<IProduct[]>;
  private pageSequence$$ = new Subject();
  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.products$ = this.productsService.getProducts();
  }
  public addProduct(_product: IProduct) {}

  public scroll(isInit: boolean) {
    let { page = 1 } = this.activatedRoute.snapshot.queryParams;
    this.pageSequence$$.next(isInit ? page : ++page);
  }
}
