import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRequiredEquipmentComponent } from './all-required-equipment.component';

describe('AllRequiredEquipmentComponent', () => {
  let component: AllRequiredEquipmentComponent;
  let fixture: ComponentFixture<AllRequiredEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllRequiredEquipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllRequiredEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
