import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseShowComponent } from './exercise-show.component';

describe('ExerciseShowComponent', () => {
  let component: ExerciseShowComponent;
  let fixture: ComponentFixture<ExerciseShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseShowComponent]
    });
    fixture = TestBed.createComponent(ExerciseShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
