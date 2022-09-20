import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOpticianTodayComponent } from './all-optician-today.component';

describe('AllOpticianTodayComponent', () => {
  let component: AllOpticianTodayComponent;
  let fixture: ComponentFixture<AllOpticianTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllOpticianTodayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllOpticianTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
