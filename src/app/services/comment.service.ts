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
export class CommentService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<any> {
    return this.http.get(baseUrl + 'comment/find-all', httpOptions);
  }

  hideComment(commentId: number): Observable<any> {
    return this.http.put(baseUrl + 'comment/hide-comment', null, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response' as 'body', // to display the full response & as 'body' for type cast
      params: new HttpParams().append('commentId', commentId),
    });
  }

  displayComment(commentId: number): Observable<any> {
    return this.http.put(baseUrl + 'comment/display-comment', null, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response' as 'body', // to display the full response & as 'body' for type cast
      params: new HttpParams().append('commentId', commentId),
    });
  }

  findByArticleId(articleId: number): Observable<any> {
    return this.http.get(baseUrl + 'comment/find-by-article-id', {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response' as 'body', // to display the full response & as 'body' for type cast
      params: new HttpParams().append('articleId', articleId),
    });
  }
}
