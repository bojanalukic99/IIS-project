import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppointmentNurseComponent } from './view-appointment-nurse.component';

describe('ViewAppointmentNurseComponent', () => {
  let component: ViewAppointmentNurseComponent;
  let fixture: ComponentFixture<ViewAppointmentNurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAppointmentNurseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAppointmentNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
