import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComfirmEditingComponent } from './comfirm-editing.component';

describe('ComfirmEditingComponent', () => {
  let component: ComfirmEditingComponent;
  let fixture: ComponentFixture<ComfirmEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComfirmEditingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComfirmEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
