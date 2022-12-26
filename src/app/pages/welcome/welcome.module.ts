import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { DemoNgZorroAntdModule } from '../../ng-zorro-antd.module';
import { WelcomeComponent } from './welcome.component';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserManagementComponent } from './user-management/user-management.component';
import { CategoryConfigComponent } from './category-config/category-config.component';
import { ArticleManagementComponent } from './article-management/article-management.component';
import { CommentManagementComponent } from './comment-management/comment-management.component';
import { CommentManagementResultComponent } from './comment-management-result/comment-management-result.component';
import { ArticleManagementCreateComponent } from './article-management-create/article-management-create.component';
import { ArticleManagementUpdateComponent } from './article-management-update/article-management-update.component';
import { ArticleApproveComponent } from './article-approve/article-approve.component';

@NgModule({
  imports: [
    WelcomeRoutingModule,
    DemoNgZorroAntdModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [
    UserManagementComponent,
    CategoryConfigComponent,
    ArticleManagementComponent,
    CommentManagementComponent,
    CommentManagementResultComponent,
    ArticleManagementCreateComponent,
    ArticleManagementUpdateComponent,
    ArticleApproveComponent,
  ],
  exports: [],
})
export class WelcomeModule {}
