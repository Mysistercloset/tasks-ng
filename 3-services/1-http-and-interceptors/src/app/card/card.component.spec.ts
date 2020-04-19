import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { products } from '../../mocks/products';
import { ImgUrlPipe } from './img-url.pipe';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { EventEmitter } from '@angular/core';

describe('[Moдуль 2] Карточка продукта', () => {
  let fixture: ComponentFixture<CardComponent>;
  let component: CardComponent;
  let addToCartSpy: jasmine.Spy;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent, ImgUrlPipe, StarRatingComponent],
      imports: [MatIconModule],
    });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    (component as any).product = products[0];
    fixture.detectChanges();
    spyOn(component as any, 'addProduct').and.callThrough();
    addToCartSpy = spyOn((component as any).addToCart, 'emit').and.callThrough();
  });
  it('компонент должен иметь метод addProduct и Output свойства addToCart', () => {
    expect((component as any).addToCart).toBeTruthy();
    expect((component as any).addProduct).toBeTruthy();
  });

  it('компонент должен иметь свойство addToCart и декоратор Output этого свойства', () => {
    expect(component.hasOwnProperty('addToCart')).toBeTruthy();
    expect((component as any)?.addToCart).toBeInstanceOf(EventEmitter);
  });

  it('иконка продукта должна быть add_shopping_cart ', () => {
    const icon = fixture.debugElement.query(By.css('.product-add-to-cart'));
    expect(icon).toBeTruthy();
    const [{ nativeNode }] = icon.childNodes;
    expect(nativeNode.textContent.trim()).toEqual('add_shopping_cart');
  });

  it('компонент должен иметь свойство product и декоратор Intput этого свойства', () => {
    expect(component.hasOwnProperty('product')).toBeTruthy();
  });

  it('тег img должен иметь правильное связывание свойств src через пайп и alt', () => {
    const imgEl = fixture.debugElement.query(By.css('.card-img-top'));
    expect(imgEl).toBeTruthy();
    const {
      images: [{ url }],
      name,
    } = (component as any)?.product;
    expect(imgEl.attributes.src).toEqual(url);
    expect(imgEl.attributes.alt).toEqual(name);
  });

  it('тег с селектором .card-title должен правильно интерполировать title', () => {
    const titleEL = fixture.debugElement.query(By.css('.card-title'));
    expect(titleEL).toBeTruthy();
    const { name } = (component as any)?.product;
    const [{ nativeNode: titleNode }] = titleEL.childNodes;
    expect(titleNode.textContent.trim()).toEqual(name);
  });

  it('тег с селектором .price-text должен правильно интерполировать price', () => {
    const { price } = (component as any)?.product;
    const priceEl = fixture.debugElement.query(By.css('.price-text'));
    expect(price).toBeTruthy();
    const [{ nativeNode: priceNode }] = priceEl.childNodes;
    expect(priceNode.textContent.trim()).toEqual(`₽${price.toString()}.00`);
  });

  it('клик на иконку "Добавить в корзину" должен вызывать метод addProduct()', () => {
    const icon = fixture.debugElement.query(By.css('.product-add-to-cart'));
    icon.triggerEventHandler('click', null);
    expect((component as any).addProduct).toHaveBeenCalledBefore(addToCartSpy);
    expect((component as any).addToCart.emit).toHaveBeenCalled();
  });

  it('должен включать в себя компонент app-star-rating ', () => {
    const ratingComponent = fixture.debugElement.query(By.directive(StarRatingComponent));
    expect(ratingComponent).toBeTruthy();
  });
});
