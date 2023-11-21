import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarLoggedComponent } from './nav-bar-logged.component';

describe('NavBarLoggedComponent', () => {
  let component: NavBarLoggedComponent;
  let fixture: ComponentFixture<NavBarLoggedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarLoggedComponent]
    });
    fixture = TestBed.createComponent(NavBarLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
