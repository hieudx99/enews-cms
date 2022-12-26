import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/Article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-management-update',
  templateUrl: './article-management-update.component.html',
  styleUrls: ['./article-management-update.component.less'],
})
export class ArticleManagementUpdateComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
  ) {}
  article!: Article;

  ngOnInit(): void {
    var articleId = this.route.snapshot.params.id;
    console.log(articleId);
    if (articleId !== null) {
      this.getArticle(articleId);
    }
  }

  getArticle(articleId: number) {
    this.articleService.findById(articleId).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
