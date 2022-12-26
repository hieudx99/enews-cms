import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { ArticleService } from 'src/app/services/article.service';
import { CommentService } from 'src/app/services/comment.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment-management',
  templateUrl: './comment-management.component.html',
  styleUrls: ['./comment-management.component.less'],
})
export class CommentManagementComponent implements OnInit {
  listArticle!: Article[];
  constructor(
    private articleService: ArticleService,
    private commentService: CommentService,
    private storageService: StorageService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  searchArticle(): void {
    var kw = (document.getElementById('txtKeyword') as HTMLInputElement).value;
    this.articleService.searchArticle(kw).subscribe((data) => {
      this.listArticle = data.body;
      console.log(this.listArticle);
    });
  }

  viewComment(articleId: number): void {
    this.storageService.saveArticleId(articleId);
    console.log('go to comment: ' + articleId);
    this.router.navigate(['welcome/comment-management-result']);
  }
}
