import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BASE_URL_TOKEN, BASE_URL } from './config';
import { ProductsService } from './products.service';
import { InterceptorService } from './interceptor.service';
import { products } from '../mocks/products';

describe('[Moдуль 3] Интерсептор ', () => {
  let httpMocked: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ProductsService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: InterceptorService,
          multi: true,
        },
        {
          provide: BASE_URL_TOKEN,
          useValue: BASE_URL,
        },
      ],
    });
    httpMocked = TestBed.inject(HttpTestingController);
  });

  it('проверка на правильный заголовок', inject(
    [ProductsService, BASE_URL_TOKEN],
    (productsService: ProductsService, baseUrl: string) => {
      const url = `${baseUrl}/products`;
      (productsService as any)?.getProducts().subscribe();
      const httpRequest: TestRequest = httpMocked.expectOne({
        method: 'GET',
        url,
      });
      expect(httpRequest.request.headers.has('Content-Type')).toBeTruthy();
      expect(httpRequest.request.headers.get('Content-Type')).toEqual('application/json');
    }
  ));
  it('проверка на получение товаров', inject(
    [ProductsService, BASE_URL_TOKEN],
    (productsService: ProductsService, baseUrl: string) => {
      const url = `${baseUrl}/products`;
      (productsService as any)?.getProducts().subscribe((response: any) => {
        expect(response).toEqual(products);
      });

      const httpRequest: TestRequest = httpMocked.expectOne({
        method: 'GET',
        url,
      });

      httpRequest.flush({
        data: products,
        error: null,
      });
    }
  ));
});
