import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveSectionComponent } from './responsive-section.component';

describe('ResponsiveSectionComponent', () => {
  let component: ResponsiveSectionComponent;
  let fixture: ComponentFixture<ResponsiveSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
