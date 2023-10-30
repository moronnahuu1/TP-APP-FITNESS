import { ComponentFixture, TestBed } from '@angular/core/testing';

import { navBar } from './navBar.component';

describe('navBarComponent', () => {
  let component: navBar;
  let fixture: ComponentFixture<navBar>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [navBar]
    });
    fixture = TestBed.createComponent(navBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
