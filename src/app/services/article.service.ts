import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = `${environment.apiUrl}/`;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  observe: 'response' as 'body', // to display the full response & as 'body' for type cast
};

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  searchArticle(kw: string): Observable<any> {
    return this.http.get(baseUrl + 'article/cms/find-by-kw', {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response' as 'body', // to display the full response & as 'body' for type cast
      params: new HttpParams().append('kw', kw),
    });
  }

  hideArticle(articleId: number): Observable<any> {
    return this.http.put(baseUrl + 'article/hide-article', null, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response' as 'body', // to display the full response & as 'body' for type cast
      params: new HttpParams().append('articleId', articleId),
    });
  }

  displayArticle(articleId: number): Observable<any> {
    return this.http.put(baseUrl + 'article/display-article', null, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response' as 'body', // to display the full response & as 'body' for type cast
      params: new HttpParams().append('articleId', articleId),
    });
  }

  findById(articleId: number): Observable<any> {
    return this.http.get(baseUrl + 'article/cms/find-by-id', {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response' as 'body', // to display the full response & as 'body' for type cast
      params: new HttpParams().append('articleId', articleId),
    });
  }

  findListArticleNotApprove(): Observable<any> {
    return this.http.get(baseUrl + 'article/cms/find-list-not-approve', {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response' as 'body', // to display the full response & as 'body' for type cast
    });
  }
}
