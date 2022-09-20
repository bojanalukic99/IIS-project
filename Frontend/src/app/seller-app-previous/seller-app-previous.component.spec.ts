import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAppPreviousComponent } from './seller-app-previous.component';

describe('SellerAppPreviousComponent', () => {
  let component: SellerAppPreviousComponent;
  let fixture: ComponentFixture<SellerAppPreviousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerAppPreviousComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerAppPreviousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
