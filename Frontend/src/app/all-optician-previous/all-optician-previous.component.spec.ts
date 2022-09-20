import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOpticianPreviousComponent } from './all-optician-previous.component';

describe('AllOpticianPreviousComponent', () => {
  let component: AllOpticianPreviousComponent;
  let fixture: ComponentFixture<AllOpticianPreviousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllOpticianPreviousComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllOpticianPreviousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
