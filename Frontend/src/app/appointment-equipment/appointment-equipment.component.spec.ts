import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentEquipmentComponent } from './appointment-equipment.component';

describe('AppointmentEquipmentComponent', () => {
  let component: AppointmentEquipmentComponent;
  let fixture: ComponentFixture<AppointmentEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentEquipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
