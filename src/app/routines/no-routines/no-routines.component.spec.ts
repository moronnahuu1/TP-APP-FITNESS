import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRoutinesComponent } from './no-routines.component';

describe('NoRoutinesComponent', () => {
  let component: NoRoutinesComponent;
  let fixture: ComponentFixture<NoRoutinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoRoutinesComponent]
    });
    fixture = TestBed.createComponent(NoRoutinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
