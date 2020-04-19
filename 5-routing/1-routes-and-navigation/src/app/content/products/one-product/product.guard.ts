import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IProduct, ProductsService } from '../../../shared/services/products.service';

@Injectable()
export class ProductGuard {
  public constructor(private router: Router, private _productsService: ProductsService) {}
  public canActivate(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<boolean> {
    return this._productsService.getProduct(route.paramMap.get('id')).pipe(
      map((product: IProduct | null) => {
        if (!product) {
          this.router.navigate(['/products']);
          return false;
        }
        return true;
      }),
      catchError(() => {
        this.router.navigate(['/products']);
        return of(false);
      })
    );
  }
}
