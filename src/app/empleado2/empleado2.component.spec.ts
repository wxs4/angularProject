import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Empleado2Component } from './empleado2.component';

describe('Empleado2Component', () => {
  let component: Empleado2Component;
  let fixture: ComponentFixture<Empleado2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Empleado2Component]
    });
    fixture = TestBed.createComponent(Empleado2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
