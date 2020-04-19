import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedbackCardComponent } from './feedback-card.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { feedbacks } from '../../mocks/feedbacks';

describe('[Модуль 4] Карточка отзыва', () => {
  let component: FeedbackCardComponent;
  let fixture: ComponentFixture<FeedbackCardComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackCardComponent, StarRatingComponent],
      imports: [MatIconModule],
    });
    fixture = TestBed.createComponent(FeedbackCardComponent);
    component = fixture.componentInstance;
    (component as any).feedback = feedbacks[0];
    fixture.detectChanges();
  });

  it('тег с селектором .description должен правильно интерполировать description', () => {
    const commentEL = fixture.debugElement.query(By.css('.description'));
    expect(commentEL).toBeTruthy();
    const { description } = (component as any)?.feedback;
    const [{ nativeNode: commentNode }] = commentEL.childNodes;
    expect(commentNode.textContent.trim()).toEqual(description);
  });
  it('тег с селектором .advantages должен правильно интерполировать advantages', () => {
    const advantagesEL = fixture.debugElement.query(By.css('.advantages'));
    expect(advantagesEL).toBeTruthy();
    const { advantages } = (component as any)?.feedback;
    const [{ nativeNode: advantagesNode }] = advantagesEL.childNodes;
    expect(advantagesNode.textContent.trim()).toEqual(advantages);
  });
  it('тег с селектором .limitations должен правильно интерполировать limitations', () => {
    const limitationsEL = fixture.debugElement.query(By.css('.limitations'));
    expect(limitationsEL).toBeTruthy();
    const { limitations } = (component as any)?.feedback;
    const [{ nativeNode: limitationsNode }] = limitationsEL.childNodes;
    expect(limitationsNode.textContent.trim()).toEqual(limitations);
  });
  it('компонент должен включать в себя компонент app-star-rating ', () => {
    const starRatingComponent = fixture.debugElement.query(By.directive(StarRatingComponent));
    expect(starRatingComponent).toBeTruthy();
  });
});
