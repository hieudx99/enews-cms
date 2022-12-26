import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleManagementUpdateComponent } from './article-management-update.component';

describe('ArticleManagementUpdateComponent', () => {
  let component: ArticleManagementUpdateComponent;
  let fixture: ComponentFixture<ArticleManagementUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleManagementUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleManagementUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
