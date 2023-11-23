import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicRoutinesShowComponent } from './public-routines-show.component';

describe('PublicRoutinesShowComponent', () => {
  let component: PublicRoutinesShowComponent;
  let fixture: ComponentFixture<PublicRoutinesShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicRoutinesShowComponent]
    });
    fixture = TestBed.createComponent(PublicRoutinesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
