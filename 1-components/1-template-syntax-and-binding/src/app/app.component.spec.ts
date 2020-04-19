import { product } from '../mocks/products';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { By } from '@angular/platform-browser';

describe('[Moдуль 1] Общие тесты приложения', () => {
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, CardComponent],
      imports: [MatIconModule],
    });
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  }));

  it(`компонент должен иметь правильный заголовок`, () => {
    const title = fixture.debugElement.query(By.css('.toolbar span'));
    const [
      {
        nativeNode: { textContent },
      },
    ] = title.childNodes;
    expect(textContent).toEqual('Курс по Angular');
  });

  it('компонент должен иметь правильное название', () => {
    const subTitle = fixture.debugElement.query(By.css('.content span'));
    const [
      {
        nativeNode: { textContent },
      },
    ] = subTitle.childNodes;
    expect(textContent).toContain('1. Интерполяция и связывание');
  });
});

describe('[Moдуль 1] Арр компонент', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, CardComponent],
      imports: [MatIconModule],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  it('компонент должен иметь метод addProduct', () => {
    expect((component as any)?.addProduct).toBeTruthy();
  });
  it('свойство chosenProduct должно быть определено и присваиваться при добавлении продукта', () => {
    const icon = fixture.debugElement.query(By.directive(MatIcon));
    icon.triggerEventHandler('click', null);
    expect((component as any).chosenProduct).toBeDefined();
  });
  it('свойство product должно быть определено и присвоено значение product', () => {
    expect((component as any)?.product).toEqual(product);
  });
  it('клик на иконку "Добавить в корзину" должен вызывать метод addProduct()', () => {
    spyOn(component as any, 'addProduct');
    const icon = fixture.debugElement.query(By.directive(MatIcon));
    icon.triggerEventHandler('click', null);
    expect((component as any)?.addProduct).toHaveBeenCalled();
  });
});
