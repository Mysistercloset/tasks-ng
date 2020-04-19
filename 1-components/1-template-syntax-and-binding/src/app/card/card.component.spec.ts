import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { EventEmitter } from '@angular/core';
import { product } from '../../mocks/products';

describe('[Moдуль 1] Карточка продукта', () => {
  let fixture: ComponentFixture<CardComponent>;
  let component: CardComponent;
  let addToCartSpy: jasmine.Spy;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
      imports: [MatIconModule],
    });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    (component as any).product = product;
    fixture.detectChanges();
    spyOn(component as any, 'addProduct').and.callThrough();
    addToCartSpy = spyOn((component as any).addToCart, 'emit').and.callThrough();
  });

  it('компонент должен иметь свойство product и декоратор Intput этого свойства', () => {
    expect(component.hasOwnProperty('product')).toBeTruthy();
  });

  it('компонент должен иметь свойство addToCart и декоратор Output этого свойства', () => {
    expect(component.hasOwnProperty('addToCart')).toBeTruthy();
    expect((component as any)?.addToCart).toBeInstanceOf(EventEmitter);
  });

  it('компонент должен иметь метод addProduct', () => {
    expect((component as any).addProduct).toBeTruthy();
  });

  it('иконка продукта должна быть add_shopping_cart', () => {
    const icon = fixture.debugElement.query(By.directive(MatIcon));
    expect(icon).toBeTruthy();
    const [{ nativeNode }] = icon.childNodes;
    expect(nativeNode.textContent.trim()).toEqual('add_shopping_cart');
  });

  it('тег img должен иметь правильное связывание свойств src и alt', () => {
    const imgEl = fixture.debugElement.query(By.css('.card-img-top'));
    expect(imgEl).toBeTruthy();
    const {
      images: [{ url }],
      name,
    } = (component as any)?.product;
    expect(imgEl.attributes.src?.trim()).toEqual(url);
    expect(imgEl.attributes.alt?.trim()).toEqual(name);
  });
  it('тег с селектором .card-title должен правильно интерполировать name', () => {
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
    expect(priceNode.textContent.trim()).toEqual(price.toString());
  });

  it('клик на иконку "Добавить в корзину" должен вызывать метод addProduct()', () => {
    const icon = fixture.debugElement.query(By.directive(MatIcon));
    icon.triggerEventHandler('click', null);
    expect((component as any).addProduct).toHaveBeenCalledBefore(addToCartSpy);
    expect((component as any).addToCart.emit).toHaveBeenCalled();
  });
});
