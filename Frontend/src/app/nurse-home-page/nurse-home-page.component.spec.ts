import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseHomePageComponent } from './nurse-home-page.component';

describe('NurseHomePageComponent', () => {
  let component: NurseHomePageComponent;
  let fixture: ComponentFixture<NurseHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NurseHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
