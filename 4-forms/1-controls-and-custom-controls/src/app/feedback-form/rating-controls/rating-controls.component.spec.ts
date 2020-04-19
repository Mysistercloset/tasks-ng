import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RatingControlsComponent } from './rating-controls.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'test',
  template: `
    <app-rating-controls [formControl]="rateControl"></app-rating-controls>
  `,
})
class TestComponent {
  public rateControl = new FormControl();
}

describe('[Moдуль 4] Выставление рейтинга', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule, ReactiveFormsModule],
      declarations: [TestComponent, RatingControlsComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  // ---------------Без значения-----------
  it('компонент должен по умолчанию отобразить 5 серых звезд ', () => {
    const ratingControlsComponent: DebugElement = fixture.debugElement.query(By.directive(RatingControlsComponent));
    const stars: DebugElement[] = ratingControlsComponent.queryAll(By.css('mat-icon'));
    expect(stars.length).toEqual(5);
    expect(stars[0].classes.selected).toBeFalsy();
    expect(stars[1].classes.selected).toBeFalsy();
    expect(stars[2].classes.selected).toBeFalsy();
    expect(stars[3].classes.selected).toBeFalsy();
    expect(stars[4].classes.selected).toBeFalsy();
  });
  it('компонент должен подсвечивать звезды желтым цветом при mouseenter', () => {
    const ratingControlsComponent: DebugElement = fixture.debugElement.query(By.directive(RatingControlsComponent));
    const stars: DebugElement[] = ratingControlsComponent.queryAll(By.css('mat-icon'));
    stars[3].triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
    expect(stars.length).toEqual(5);
    expect(stars[0].classes.selected).toBeTruthy();
    expect(stars[1].classes.selected).toBeTruthy();
    expect(stars[2].classes.selected).toBeTruthy();
    expect(stars[3].classes.selected).toBeFalsy();
    expect(stars[4].classes.selected).toBeFalsy();
  });
  it('компонент должен убрать подсветку звезд при mouseleave', () => {
    const ratingControlsComponent: DebugElement = fixture.debugElement.query(By.directive(RatingControlsComponent));
    const stars: DebugElement[] = ratingControlsComponent.queryAll(By.css('mat-icon'));
    stars[3].triggerEventHandler('mouseleave', null);
    fixture.detectChanges();
    expect(stars.length).toEqual(5);
    expect(stars[0].classes.selected).toBeFalsy();
    expect(stars[1].classes.selected).toBeFalsy();
    expect(stars[2].classes.selected).toBeFalsy();
    expect(stars[3].classes.selected).toBeFalsy();
    expect(stars[4].classes.selected).toBeFalsy();
  });
  it('компонент должен звезды желтыми при click', () => {
    const ratingControlsComponent: DebugElement = fixture.debugElement.query(By.directive(RatingControlsComponent));
    const stars: DebugElement[] = ratingControlsComponent.queryAll(By.css('mat-icon'));
    stars[3].triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(stars.length).toEqual(5);
    expect(stars[0].classes.selected).toBeTruthy();
    expect(stars[1].classes.selected).toBeTruthy();
    expect(stars[2].classes.selected).toBeTruthy();
    expect(stars[3].classes.selected).toBeTruthy();
    expect(stars[4].classes.selected).toBeFalsy();
  });
  // --------------- NULL -------------
  it('проверка на отображение и подсветку звезд при rateControl = null ', () => {
    component.rateControl.patchValue(null);
    const ratingControlsComponent: DebugElement = fixture.debugElement.query(By.directive(RatingControlsComponent));
    const stars: DebugElement[] = ratingControlsComponent.queryAll(By.css('mat-icon'));
    fixture.detectChanges();
    expect(stars.length).toEqual(5);
    expect(stars[0].classes.selected).toBeFalsy();
    expect(stars[1].classes.selected).toBeFalsy();
    expect(stars[2].classes.selected).toBeFalsy();
    expect(stars[3].classes.selected).toBeFalsy();
    expect(stars[4].classes.selected).toBeFalsy();

    stars[3].triggerEventHandler('mouseleave', null);
    fixture.detectChanges();
    expect(stars.length).toEqual(5);
    expect(stars[0].classes.selected).toBeFalsy();
    expect(stars[1].classes.selected).toBeFalsy();
    expect(stars[2].classes.selected).toBeFalsy();
    expect(stars[3].classes.selected).toBeFalsy();
    expect(stars[4].classes.selected).toBeFalsy();

    stars[3].triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
    expect(stars.length).toEqual(5);
    expect(stars[0].classes.selected).toBeTruthy();
    expect(stars[1].classes.selected).toBeTruthy();
    expect(stars[2].classes.selected).toBeTruthy();
    expect(stars[3].classes.selected).toBeFalsy();
    expect(stars[4].classes.selected).toBeFalsy();

    stars[3].triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(stars.length).toEqual(5);
    expect(stars[0].classes.selected).toBeTruthy();
    expect(stars[1].classes.selected).toBeTruthy();
    expect(stars[2].classes.selected).toBeTruthy();
    expect(stars[3].classes.selected).toBeTruthy();
    expect(stars[4].classes.selected).toBeFalsy();
  });
  // ---------------With Value------------------
  it('проверка на отображение и подсветку звезд при rateControl = число от 1 до 5', () => {
    component.rateControl.patchValue(2);
    fixture.detectChanges();
    const ratingControlsComponent: DebugElement = fixture.debugElement.query(By.directive(RatingControlsComponent));
    const stars: DebugElement[] = ratingControlsComponent.queryAll(By.css('mat-icon'));
    expect(stars.length).toEqual(5);
    expect(stars[0].classes.selected).toBeTruthy();
    expect(stars[1].classes.selected).toBeTruthy();
    expect(stars[2].classes.selected).toBeFalsy();
    expect(stars[3].classes.selected).toBeFalsy();
    expect(stars[4].classes.selected).toBeFalsy();

    stars[3].triggerEventHandler('mouseleave', null);
    fixture.detectChanges();
    expect(stars.length).toEqual(5);
    expect(stars[0].classes.selected).toBeTruthy();
    expect(stars[1].classes.selected).toBeTruthy();
    expect(stars[2].classes.selected).toBeFalsy();
    expect(stars[3].classes.selected).toBeFalsy();
    expect(stars[4].classes.selected).toBeFalsy();

    stars[3].triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
    expect(stars.length).toEqual(5);
    expect(stars[0].classes.selected).toBeTruthy();
    expect(stars[1].classes.selected).toBeTruthy();
    expect(stars[2].classes.selected).toBeTruthy();
    expect(stars[3].classes.selected).toBeFalsy();
    expect(stars[4].classes.selected).toBeFalsy();

    stars[3].triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(stars.length).toEqual(5);
    expect(stars[0].classes.selected).toBeTruthy();
    expect(stars[1].classes.selected).toBeTruthy();
    expect(stars[2].classes.selected).toBeTruthy();
    expect(stars[3].classes.selected).toBeTruthy();
    expect(stars[4].classes.selected).toBeFalsy();
  });
});
