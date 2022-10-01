import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredEquipmentCalendarComponent } from './required-equipment-calendar.component';

describe('RequiredEquipmentCalendarComponent', () => {
  let component: RequiredEquipmentCalendarComponent;
  let fixture: ComponentFixture<RequiredEquipmentCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequiredEquipmentCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequiredEquipmentCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
