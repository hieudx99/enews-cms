import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from './services/common.service';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  isManagerLoggedIn = false;
  isCollapsed = false;
  keyword = '';

  constructor(
    private storageService: StorageService,
    private commonService: CommonService,
    private router: Router
  ) {}

  ngOnInit() {
    this.isLoggedIn = !!this.commonService.isLoggedIn();
    console.log('app.component: isLoggedIn = ' + this.isLoggedIn);
    if (this.isLoggedIn) {
    }
    console.log(this.isManagerLoggedIn);
    if (this.isManagerLoggedIn) {
    }
  }

  logout(): void {
    this.storageService.signOut();
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }
  reloadPage(): void {
    window.location.reload();
  }
}
