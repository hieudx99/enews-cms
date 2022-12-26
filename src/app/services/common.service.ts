import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private storageService: StorageService) {}

  isLoggedIn(): boolean {
    let token = this.storageService.getToken();
    if ('' === token) {
      return false;
    }
    return true;
  }
}
