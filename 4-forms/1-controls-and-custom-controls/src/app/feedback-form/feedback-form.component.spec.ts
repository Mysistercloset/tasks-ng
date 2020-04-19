import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedbackFormComponent } from './feedback-form.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RatingControlsComponent } from './rating-controls/rating-controls.component';

describe('[Moдуль 4] Форма для отзывов', () => {
  let component: FeedbackFormComponent;
  let fixture: ComponentFixture<FeedbackFormComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  let createFeedbackSpy: jasmine.Spy;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [FeedbackFormComponent, RatingControlsComponent],
      providers: [{ provide: FormBuilder, useValue: formBuilder }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component as any, 'save').and.callThrough();
    createFeedbackSpy = spyOn((component as any).createFeedback, 'emit').and.callThrough();
  });

  it('компонент должен иметь метод createFeedback и Output свойства save ', () => {
    expect((component as any).save).toBeTruthy();
    expect((component as any).createFeedback).toBeTruthy();
  });

  it('клик на кнопку "Оставить отзыв" должен вызывать метод save()', () => {
    const btn = fixture.debugElement.query(By.css('.feedback-btn-control'));
    btn.triggerEventHandler('click', null);
    expect((component as any).save).toHaveBeenCalledBefore(createFeedbackSpy);
    expect((component as any).createFeedback.emit).toHaveBeenCalled();
  });

  it('форма должна быть не пустой', () => {
    expect((component as any).feedbackForm.valid).toBeFalsy();
  });

  it('поле description в форме должно быть валидным', () => {
    const description = (component as any).feedbackForm.controls.description;
    expect(description.valid).toBeFalsy();

    description.setValue('');
    expect(description.hasError('required')).toBeTruthy();

    description.setValue('101010');
    expect(description.hasError('minLength')).toBeFalsy();
  });

  it('поле advantages в форме должно быть валидным', () => {
    const advantages = (component as any).feedbackForm.controls.advantages;
    expect(advantages.valid).toBeFalsy();

    advantages.setValue('');
    expect(advantages.hasError('required')).toBeTruthy();

    advantages.setValue('101010');
    expect(advantages.hasError('minLength')).toBeFalsy();
  });

  it('поле limitations в форме должно быть валидным', () => {
    const limitations = (component as any).feedbackForm.controls.limitations;
    expect(limitations.valid).toBeFalsy();

    limitations.setValue('');
    expect(limitations.hasError('required')).toBeTruthy();

    limitations.setValue('101010');
    expect(limitations.hasError('minLength')).toBeFalsy();
  });
});
