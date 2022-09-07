import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRequiredEquipmentComponent } from './add-required-equipment.component';

describe('AddRequiredEquipmentComponent', () => {
  let component: AddRequiredEquipmentComponent;
  let fixture: ComponentFixture<AddRequiredEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRequiredEquipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRequiredEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
