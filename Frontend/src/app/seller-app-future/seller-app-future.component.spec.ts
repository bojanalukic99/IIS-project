import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAppFutureComponent } from './seller-app-future.component';

describe('SellerAppFutureComponent', () => {
  let component: SellerAppFutureComponent;
  let fixture: ComponentFixture<SellerAppFutureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerAppFutureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerAppFutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
