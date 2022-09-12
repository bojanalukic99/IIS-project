import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyeDetailsDialogComponent } from './eye-details-dialog.component';

describe('EyeDetailsDialogComponent', () => {
  let component: EyeDetailsDialogComponent;
  let fixture: ComponentFixture<EyeDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EyeDetailsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EyeDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
