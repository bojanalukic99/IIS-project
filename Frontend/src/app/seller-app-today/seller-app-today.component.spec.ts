import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAppTodayComponent } from './seller-app-today.component';

describe('SellerAppTodayComponent', () => {
  let component: SellerAppTodayComponent;
  let fixture: ComponentFixture<SellerAppTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerAppTodayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerAppTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
