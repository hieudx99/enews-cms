import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { ArticleService } from 'src/app/services/article.service';
import { CommentService } from 'src/app/services/comment.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-approve',
  templateUrl: './article-approve.component.html',
  styleUrls: ['./article-approve.component.less'],
})
export class ArticleApproveComponent implements OnInit {
  listArticle!: Article[];
  constructor(
    private articleService: ArticleService,
    private commentService: CommentService,
    private storageService: StorageService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.articleService.findListArticleNotApprove().subscribe((data) => {
      console.log(data.body);
      this.listArticle = data.body;
    });
  }

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
