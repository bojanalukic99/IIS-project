import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentMaterialComponent } from './appointment-material.component';

describe('AppointmentMaterialComponent', () => {
  let component: AppointmentMaterialComponent;
  let fixture: ComponentFixture<AppointmentMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
