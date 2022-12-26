import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';

const baseUrl = `${environment.apiUrl}/`;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  observe: 'response' as 'body', // to display the full response & as 'body' for type cast
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  checkLogin(credentials: any): Observable<any> {
    return this.http.post(baseUrl + 'user/auth/admin/login', null, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response' as 'body', // to display the full response & as 'body' for type cast
      params: new HttpParams()
        .append('username', credentials.username)
        .append('password', credentials.password),
    });
  }

  findById(userId: number): Observable<any> {
    return this.http.get(baseUrl + 'user/find-by-id', {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response' as 'body', // to display the full response & as 'body' for type cast
      params: new HttpParams().append('userId', userId),
    });
  }

  searchUser(kw: string): Observable<any> {
    return this.http.get(baseUrl + 'user/find-by-username', {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response' as 'body', // to display the full response & as 'body' for type cast
      params: new HttpParams().append('kw', kw),
    });
  }

  blockUser(userId: number): Observable<any> {
    return this.http.get(baseUrl + 'user/block-user', {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response' as 'body', // to display the full response & as 'body' for type cast
      params: new HttpParams().append('userId', userId),
    });
  }

  unblockUser(userId: number): Observable<any> {
    return this.http.get(baseUrl + 'user/unblock-user', {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response' as 'body', // to display the full response & as 'body' for type cast
      params: new HttpParams().append('userId', userId),
    });
  }
}
