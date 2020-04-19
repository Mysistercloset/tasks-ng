import { Observable } from 'rxjs';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../shared/services/products.service';
import { IProduct } from '1-components/1-template-syntax-and-binding/src/mocks/products';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.sass'],
})
export class OneProductComponent implements OnInit {
  public product$!: Observable<IProduct>;
  public productId!: string;
  constructor(private route: ActivatedRoute, private productsService: ProductsService) {}

  @Output()
  public addToCart = new EventEmitter();
  ngOnInit() {
    this.productId = this.route.snapshot.params.id;
    this.product$ = this.productsService.getProduct(this.productId);
  }
  public addProduct(): void {
    this.addToCart.emit();
  }
}
