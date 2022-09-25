import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComfirmDeletingComponent } from './comfirm-deleting.component';

describe('ComfirmDeletingComponent', () => {
  let component: ComfirmDeletingComponent;
  let fixture: ComponentFixture<ComfirmDeletingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComfirmDeletingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComfirmDeletingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
