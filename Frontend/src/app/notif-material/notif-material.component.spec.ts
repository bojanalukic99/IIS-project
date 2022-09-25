import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifMaterialComponent } from './notif-material.component';

describe('NotifMaterialComponent', () => {
  let component: NotifMaterialComponent;
  let fixture: ComponentFixture<NotifMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotifMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
