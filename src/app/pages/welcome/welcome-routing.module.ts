import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleApproveComponent } from './article-approve/article-approve.component';
import { ArticleManagementCreateComponent } from './article-management-create/article-management-create.component';
import { ArticleManagementUpdateComponent } from './article-management-update/article-management-update.component';
import { ArticleManagementComponent } from './article-management/article-management.component';
import { CategoryConfigComponent } from './category-config/category-config.component';
import { CommentManagementResultComponent } from './comment-management-result/comment-management-result.component';
import { CommentManagementComponent } from './comment-management/comment-management.component';
import { ProfileComponent } from './profile/profile.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'comment-management', component: CommentManagementComponent },
  {
    path: 'comment-management-result',
    component: CommentManagementResultComponent,
  },
  { path: 'user-management', component: UserManagementComponent },
  { path: 'category-config', component: CategoryConfigComponent },
  { path: 'article-management', component: ArticleManagementComponent },
  { path: 'article-approve', component: ArticleApproveComponent },
  {
    path: 'article-management-create',
    component: ArticleManagementCreateComponent,
  },
  {
    path: 'article-management-update/:id',
    component: ArticleManagementUpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeRoutingModule {}
