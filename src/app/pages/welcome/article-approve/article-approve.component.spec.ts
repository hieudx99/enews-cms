import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleApproveComponent } from './article-approve.component';

describe('ArticleApproveComponent', () => {
  let component: ArticleApproveComponent;
  let fixture: ComponentFixture<ArticleApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleApproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
