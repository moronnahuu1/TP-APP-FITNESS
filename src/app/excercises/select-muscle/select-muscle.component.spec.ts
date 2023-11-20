import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMuscleComponent } from './select-muscle.component';

describe('SelectMuscleComponent', () => {
  let component: SelectMuscleComponent;
  let fixture: ComponentFixture<SelectMuscleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectMuscleComponent]
    });
    fixture = TestBed.createComponent(SelectMuscleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
