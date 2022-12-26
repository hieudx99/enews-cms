import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth_token';
const USER_ID = 'user_id';
const ARTICLE_ID = 'article_id';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY) || '';
  }

  public saveUserId(userId: number): void {
    window.sessionStorage.removeItem(USER_ID);
    window.sessionStorage.setItem(USER_ID, String(userId));
  }

  public getUserId(): number {
    return Number(sessionStorage.getItem(USER_ID));
  }

  public saveArticleId(articleId: number): void {
    window.sessionStorage.removeItem(ARTICLE_ID);
    window.sessionStorage.setItem(ARTICLE_ID, String(articleId));
  }

  public getArticleId(): number {
    return Number(sessionStorage.getItem(ARTICLE_ID));
  }
}
