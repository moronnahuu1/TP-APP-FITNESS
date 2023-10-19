import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chineseff4Component } from './chineseff4.component';

describe('Chineseff4Component', () => {
  let component: Chineseff4Component;
  let fixture: ComponentFixture<Chineseff4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Chineseff4Component]
    });
    fixture = TestBed.createComponent(Chineseff4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
