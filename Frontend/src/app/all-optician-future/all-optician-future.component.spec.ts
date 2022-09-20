import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOpticianFutureComponent } from './all-optician-future.component';

describe('AllOpticianFutureComponent', () => {
  let component: AllOpticianFutureComponent;
  let fixture: ComponentFixture<AllOpticianFutureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllOpticianFutureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllOpticianFutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
