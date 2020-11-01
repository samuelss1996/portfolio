import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleExternalLinksComponent } from './article-external-links.component';

describe('ArticleExternalLinksComponent', () => {
  let component: ArticleExternalLinksComponent;
  let fixture: ComponentFixture<ArticleExternalLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleExternalLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleExternalLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
