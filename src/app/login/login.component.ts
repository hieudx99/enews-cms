import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { CommonService } from '../services/common.service';
import { StorageService } from '../services/storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  form: any = {
    username: '',
    password: '',
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  user!: User;
  constructor(
    private service: UserService,
    private storageService: StorageService,
    private commonService: CommonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.commonService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.router.navigate(['/welcome']);
    }
  }

  onSubmit(): void {
    console.log(this.form.username);
    this.service.checkLogin(this.form).subscribe(
      (data) => {
        console.log(data.body);
        console.log(data.headers);
        this.user = data.body;
        this.storageService.saveUserId(this.user.id);
        console.log(this.storageService.getUserId());
        this.storageService.saveToken(data.headers.get('Authorization'));
        console.log(this.storageService.getToken);
        this.isLoginFailed = false;
        this.isLoggedIn = true;

        this.router.navigate(['/welcome']).then(() => window.location.reload());
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
