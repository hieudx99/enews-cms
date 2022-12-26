import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/Comment';
import { CommentService } from 'src/app/services/comment.service';
import { CommonService } from 'src/app/services/common.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-comment-management-result',
  templateUrl: './comment-management-result.component.html',
  styleUrls: ['./comment-management-result.component.less'],
})
export class CommentManagementResultComponent implements OnInit {
  articleId!: number;
  listComment!: Comment[];

  constructor(
    private commentService: CommentService,
    private storageService: StorageService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.articleId = this.storageService.getArticleId();
    this.commentService.findByArticleId(this.articleId).subscribe((data) => {
      console.log(data.body);
      this.listComment = data.body;
      for (const item of this.listComment) {
        item.requestDate = this.formatDate(item.requestDate);
      }
    });
  }

  hideComment(commentId: number): void {
    this.commentService.hideComment(commentId).subscribe((data) => {
      console.log('httpStatus = ' + data.status);
      let code = data.status;
      if (code === 200) {
        console.log(data.body);
        for (const item of this.listComment) {
          if (item.id === commentId) {
            item.isVisible = data.body.isVisible;
            break;
          }
        }
        console.log(this.listComment);
      }
    });
  }

  displayComment(commentId: number): void {
    this.commentService.displayComment(commentId).subscribe((data) => {
      console.log('httpStatus = ' + data.status);
      let code = data.status;
      if (code === 200) {
        console.log(data.body);
        for (const item of this.listComment) {
          if (item.id === commentId) {
            item.isVisible = data.body.isVisible;
            break;
          }
        }
        console.log(this.listComment);
      }
    });
  }

  formatDate(dateStr: string): string {
    // 2022-11-12T18:07:00.000+00:00
    var formated: string;
    var [dateComponents, timeComponents] = dateStr.split('T');
    timeComponents = timeComponents.substring(0, 8);
    return dateComponents + ' ' + timeComponents;
  }
}
