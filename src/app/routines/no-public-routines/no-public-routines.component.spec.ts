import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPublicRoutinesComponent } from './no-public-routines.component';

describe('NoPublicRoutinesComponent', () => {
  let component: NoPublicRoutinesComponent;
  let fixture: ComponentFixture<NoPublicRoutinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoPublicRoutinesComponent]
    });
    fixture = TestBed.createComponent(NoPublicRoutinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
