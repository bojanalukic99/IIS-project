import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenagerHomePageComponent } from './menager-home-page.component';

describe('MenagerHomePageComponent', () => {
  let component: MenagerHomePageComponent;
  let fixture: ComponentFixture<MenagerHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenagerHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenagerHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
