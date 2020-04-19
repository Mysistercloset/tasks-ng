import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ProductsService } from '../../shared/services/products.service';
import { BASE_URL_TOKEN } from '../../config';
import { environment } from '5-routing/1-routes-and-navigation/src/environments/environment.prod';
import { InterceptorService } from '../../shared/services/interceptor.service';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';

describe('[Moдуль 5] Products компонент', () => {
  let fixture: ComponentFixture<ProductsComponent>;
  let component: ProductsComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      imports: [HttpClientModule,  RouterModule.forRoot([]),],
      providers: [
        ProductsService,
        {
          provide: BASE_URL_TOKEN,
          useValue: environment.baseUrl,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: InterceptorService,
          multi: true,
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  it('свойство products должно быть определено', () => {
    expect((component as any)?.products).toBeDefined();
  });
  it('компонент должен иметь метод addProduct', () => {
    expect((component as any)?.addProduct).toBeTruthy();
  });
  it('свойство productsService должно быть определено', () => {
    expect((component as any)?.productsService).toBeDefined();
  });
  it('свойство pageSequence должно быть определено', () => {
    fixture.autoDetectChanges();
    expect((component as any).pageSequence$$).toBeDefined();
  });
});
