import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificInfoUserComponent } from './specific-info-user.component';

describe('SpecificInfoUserComponent', () => {
  let component: SpecificInfoUserComponent;
  let fixture: ComponentFixture<SpecificInfoUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecificInfoUserComponent]
    });
    fixture = TestBed.createComponent(SpecificInfoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
