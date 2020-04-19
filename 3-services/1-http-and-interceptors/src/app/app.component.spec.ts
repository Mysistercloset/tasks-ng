import { InterceptorService } from './interceptor.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { StarRatingComponent } from './card/star-rating/star-rating.component';
import { CardComponent } from './card/card.component';
import { ImgUrlPipe } from './card/img-url.pipe';
import { BASE_URL_TOKEN } from './config';
import { ProductsService } from './products.service';
import { environment } from '../environments/environment';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

describe('[Moдуль 3] Общие тесты приложения', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, StarRatingComponent, CardComponent, ImgUrlPipe],
      imports: [HttpClientModule],
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
    });
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('проверка на создание компонента', () => {
    expect(app).toBeTruthy();
  });

  it(`компонент должен иметь правильный заголовок `, () => {
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
    expect(textContent.trim()).toContain('3. Cервисы и Http протокол');
  });
});

describe('[Moдуль 3] Арр компонент', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, StarRatingComponent, CardComponent, ImgUrlPipe],
      imports: [HttpClientModule],
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
    });
    fixture = TestBed.createComponent(AppComponent);
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
});
