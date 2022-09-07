import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOpticianAppointmentComponent } from './add-optician-appointment.component';

describe('AddOpticianAppointmentComponent', () => {
  let component: AddOpticianAppointmentComponent;
  let fixture: ComponentFixture<AddOpticianAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOpticianAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOpticianAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
