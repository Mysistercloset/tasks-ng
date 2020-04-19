import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { ImgUrlPipe } from './card/img-url.pipe';
import { StarRatingComponent } from './card/star-rating/star-rating.component';

describe('[Moдуль 2] Общие тесты приложения', () => {
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, CardComponent, ImgUrlPipe, StarRatingComponent],
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

  it('компонент должен правильно интерполировать подзаголовок', () => {
    const subTitle = fixture.debugElement.query(By.css('.content span'));
    const [
      {
        nativeNode: { textContent },
      },
    ] = subTitle.childNodes;
    expect(textContent.trim()).toContain('2. Директивы и пайпы');
  });
});
describe('[Moдуль 2] Арр компонент', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, CardComponent, ImgUrlPipe, StarRatingComponent],
      imports: [MatIconModule],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component as any, 'addProduct').and.callThrough();
  }));

  it('компонент должен иметь метод addProduct', () => {
    expect((component as any)?.addProduct).toBeTruthy();
  });
});
