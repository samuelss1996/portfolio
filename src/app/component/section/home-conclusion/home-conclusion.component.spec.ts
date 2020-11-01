import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeConclusionComponent } from './home-conclusion.component';

describe('HomeConclusionComponent', () => {
  let component: HomeConclusionComponent;
  let fixture: ComponentFixture<HomeConclusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeConclusionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeConclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
