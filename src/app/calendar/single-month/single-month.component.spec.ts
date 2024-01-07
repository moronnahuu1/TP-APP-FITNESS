import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMonthComponent } from './single-month.component';

describe('SingleMonthComponent', () => {
  let component: SingleMonthComponent;
  let fixture: ComponentFixture<SingleMonthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleMonthComponent]
    });
    fixture = TestBed.createComponent(SingleMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
