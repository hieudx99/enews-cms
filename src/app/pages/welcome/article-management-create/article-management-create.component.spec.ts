import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleManagementCreateComponent } from './article-management-create.component';

describe('ArticleManagementCreateComponent', () => {
  let component: ArticleManagementCreateComponent;
  let fixture: ComponentFixture<ArticleManagementCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleManagementCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleManagementCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
