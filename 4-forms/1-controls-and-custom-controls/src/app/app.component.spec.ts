import { StarRatingComponent } from '../../../../3-services/1-http-and-interceptors/src/app/card/star-rating/star-rating.component';
import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { RatingControlsComponent } from './feedback-form/rating-controls/rating-controls.component';

describe('[Module 4] Общие тесты приложения', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, FeedbackFormComponent, RatingControlsComponent, StarRatingComponent],
      imports: [ReactiveFormsModule],
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
    expect(textContent.trim()).toEqual('Курс по Angular');
  });

  it('компонент должен правильно интерполировать подзаголовок', () => {
    const subTitle = fixture.debugElement.query(By.css('.content span'));
    const [
      {
        nativeNode: { textContent },
      },
    ] = subTitle.childNodes;
    expect(textContent.trim()).toContain('4. Формы и свои элементы форм');
  });
});
