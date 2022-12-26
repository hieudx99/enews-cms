import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentManagementResultComponent } from './comment-management-result.component';

describe('CommentManagementResultComponent', () => {
  let component: CommentManagementResultComponent;
  let fixture: ComponentFixture<CommentManagementResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentManagementResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentManagementResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
