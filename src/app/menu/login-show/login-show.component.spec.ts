import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginShowComponent } from './login-show.component';

describe('LoginShowComponent', () => {
  let component: LoginShowComponent;
  let fixture: ComponentFixture<LoginShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginShowComponent]
    });
    fixture = TestBed.createComponent(LoginShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
