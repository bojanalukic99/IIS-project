import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppDetailsComponent } from './add-app-details.component';

describe('AddAppDetailsComponent', () => {
  let component: AddAppDetailsComponent;
  let fixture: ComponentFixture<AddAppDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAppDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAppDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
