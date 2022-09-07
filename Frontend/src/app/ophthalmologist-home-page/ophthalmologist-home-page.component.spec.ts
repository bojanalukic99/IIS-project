import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OphthalmologistHomePageComponent } from './ophthalmologist-home-page.component';

describe('OphthalmologistHomePageComponent', () => {
  let component: OphthalmologistHomePageComponent;
  let fixture: ComponentFixture<OphthalmologistHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OphthalmologistHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OphthalmologistHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
