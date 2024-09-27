import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Empleado1Component } from './empleado1.component';

describe('Empleado1Component', () => {
  let component: Empleado1Component;
  let fixture: ComponentFixture<Empleado1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Empleado1Component]
    });
    fixture = TestBed.createComponent(Empleado1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
