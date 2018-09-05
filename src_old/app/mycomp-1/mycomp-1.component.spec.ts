import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mycomp1Component } from './mycomp-1.component';

describe('Mycomp1Component', () => {
  let component: Mycomp1Component;
  let fixture: ComponentFixture<Mycomp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mycomp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mycomp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
