import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeNotLoggedComponent } from './welcome-not-logged.component';

describe('WelcomeNotLoggedComponent', () => {
  let component: WelcomeNotLoggedComponent;
  let fixture: ComponentFixture<WelcomeNotLoggedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeNotLoggedComponent]
    });
    fixture = TestBed.createComponent(WelcomeNotLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
