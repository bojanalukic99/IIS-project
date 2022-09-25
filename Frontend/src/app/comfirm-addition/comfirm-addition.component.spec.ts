import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComfirmAdditionComponent } from './comfirm-addition.component';

describe('ComfirmAdditionComponent', () => {
  let component: ComfirmAdditionComponent;
  let fixture: ComponentFixture<ComfirmAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComfirmAdditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComfirmAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
