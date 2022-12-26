import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/Article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-management',
  templateUrl: './article-management.component.html',
  styleUrls: ['./article-management.component.less'],
})
export class ArticleManagementComponent implements OnInit {
  listArticle?: Article[];
  currentArticle!: Article;
  currentIndex = -1;
  title = '';

  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit(): void {}

  setActiveArticle(article: Article, index: number): void {
    this.currentArticle = article;
    this.currentIndex = index;
  }

  searchTitle(): void {
    this.currentArticle = new Article();
    this.currentIndex = -1;

    this.articleService.searchArticle(this.title).subscribe(
      (data) => {
        this.listArticle = data.body;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  hideArticle(articleId: number): void {
    console.log('hide article >>>> articleId = ' + articleId);
    this.articleService.hideArticle(articleId).subscribe(
      (data) => {
        console.log(data);
        this.currentArticle.isVisible = data.body.isVisible;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  displayArticle(articleId: number): void {
    console.log('display article >>>> articleId = ' + articleId);
    this.articleService.displayArticle(articleId).subscribe(
      (data) => {
        console.log(data);
        this.currentArticle.isVisible = data.body.isVisible;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  btnAddOnclick(): void {
    this.router.navigate(['welcome/article-management-create']);
  }
}
