import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanceledAppComponent } from './canceled-app.component';

describe('CanceledAppComponent', () => {
  let component: CanceledAppComponent;
  let fixture: ComponentFixture<CanceledAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanceledAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanceledAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
