import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SharedModule } from '../../../shared/shared.module';
import { ProductGuard } from './product.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductsService } from '../../../shared/services/products.service';
import { BASE_URL_TOKEN } from '../../../config';
import { environment } from '5-routing/1-routes-and-navigation/src/environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { products, feedbacks } from '5-routing/1-routes-and-navigation/src/mocks/products';
import { StarRatingComponent } from '../../../shared/components/star-rating/star-rating.component';
import { InterceptorService } from '../../../shared/services/interceptor.service';
import { ImgUrlPipe } from '../../../shared/pipes/img-url.pipe';
import { of } from 'rxjs';
import { OneProductComponent } from './one-product.component';

describe('[Moдуль 5] Один продукт', () => {
  let fixture: ComponentFixture<OneProductComponent>;
  let component: OneProductComponent;
  let addToCartSpy: jasmine.Spy;
  const product = products[0];
  const feedback = feedbacks[0];
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneProductComponent, ImgUrlPipe, StarRatingComponent],
      imports: [SharedModule, RouterTestingModule],
      providers: [
        ProductGuard,
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
    });
    fixture = TestBed.createComponent(OneProductComponent);
    component = fixture.componentInstance;
    (component as any).product$ = of(product);
    (component as any).feedback$ = of(feedback);
    fixture.detectChanges();
    spyOn(component as any, 'addProduct').and.callThrough();
    addToCartSpy = spyOn((component as any).addToCart, 'emit').and.callThrough();
  });
  it('компонент должен иметь метод addProduct и Output свойства addToCart', () => {
    expect((component as any).addToCart).toBeTruthy();
    expect((component as any).addProduct).toBeTruthy();
  });

  it('иконка продукта должна быть add_shopping_cart ', () => {
    (component as any).product$ = of(product);
    fixture.detectChanges();
    const icon = fixture.debugElement.query(By.css('.btn-icon'));
    expect(icon).toBeTruthy();
    const [{ nativeNode }] = icon.childNodes;
    expect(nativeNode.textContent).toEqual('add_shopping_cart');
  });

  it('тег img должен иметь правильное связывание свойств src и alt', () => {
    (component as any).product$ = of(product);
    fixture.detectChanges();
    const imgEl = fixture.debugElement.query(By.css('.main-cont-info-img'));
    expect(imgEl).toBeTruthy();
    const {
      images: [{ url }],
      name,
    } = product;
    expect(imgEl.attributes.src?.trim()).toEqual(url);
    expect(imgEl.attributes.alt?.trim()).toEqual(name);
  });

  it('тег с селектором .product-title должен правильно интерполировать title', () => {
    (component as any).product$ = of(product);
    fixture.detectChanges();
    const titleEL = fixture.debugElement.query(By.css('.product-title'));
    expect(titleEL).toBeTruthy();
    const { name } = product;
    const [{ nativeNode: titleNode }] = titleEL.childNodes;
    expect(titleNode.textContent.trim()).toEqual(name);
  });

  it('тег с селектором .price-text должен правильно интерполировать price', () => {
    (component as any).product$ = of(product);
    fixture.detectChanges();
    const { price } = product;
    const priceEl = fixture.debugElement.query(By.css('.main-cont-info-price'));
    expect(price).toBeTruthy();
    const [{ nativeNode: priceNode }] = priceEl.childNodes;
    expect(priceNode.textContent.trim()).toEqual(`₽${price.toString()}.00`);
  });

  it('тег с селектором .product-description должен правильно интерполировать description', () => {
    (component as any).product$ = of(product);
    fixture.detectChanges();
    const descriptionEL = fixture.debugElement.query(By.css('.main-cont-description-descr p'));
    expect(descriptionEL).toBeTruthy();
    const { description } = product;
    const [{ nativeNode: titleNode }] = descriptionEL.childNodes;
    expect(titleNode.textContent.trim()).toEqual(description);
  });

  it('клик на иконку "Добавить в корзину" должен вызывать метод addProduct()', () => {
    (component as any).product$ = of(product);
    fixture.detectChanges();
    const icon = fixture.debugElement.query(By.css('.btn-icon'));
    icon.triggerEventHandler('click', null);
    expect((component as any).addProduct).toHaveBeenCalledBefore(addToCartSpy);
    expect((component as any).addToCart.emit).toHaveBeenCalled();
  });

  it('должен включать в себя компонент app-star-rating ', () => {
    (component as any).product$ = of(product);
    fixture.detectChanges();
    const starRatingComponent = fixture.debugElement.query(By.directive(StarRatingComponent));
    expect(starRatingComponent).toBeTruthy();
  });

  it('проверка на правильное значение поля feedback-rate', () => {
    (component as any).product$ = of(product);
    fixture.whenStable().then(() => {
      fixture.detectChanges();
    const feedbackRateEL = fixture.debugElement.query(By.css('.feedback-rate'));
      expect(feedbackRateEL).toBeTruthy();
      const { rating } = product;
      const [{ nativeNode: titleNode }] = feedbackRateEL.childNodes;
      expect(titleNode.textContent.trim()).toEqual(rating);
    })
  });
});
