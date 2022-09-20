import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOpticianComponent } from './all-optician.component';

describe('AllOpticianComponent', () => {
  let component: AllOpticianComponent;
  let fixture: ComponentFixture<AllOpticianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllOpticianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllOpticianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
