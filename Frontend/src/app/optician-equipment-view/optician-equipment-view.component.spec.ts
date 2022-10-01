import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpticianEquipmentViewComponent } from './optician-equipment-view.component';

describe('OpticianEquipmentViewComponent', () => {
  let component: OpticianEquipmentViewComponent;
  let fixture: ComponentFixture<OpticianEquipmentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpticianEquipmentViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpticianEquipmentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
