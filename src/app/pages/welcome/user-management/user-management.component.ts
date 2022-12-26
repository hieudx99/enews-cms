import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.less'],
})
export class UserManagementComponent implements OnInit {
  listUser?: User[];
  currentUser!: User;
  currentIndex = -1;
  username = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  setActiveUser(user: User, index: number): void {
    this.currentUser = user;
    this.currentIndex = index;
  }

  searchUser(): void {
    this.currentUser = new User();
    this.currentIndex = -1;

    this.userService.searchUser(this.username).subscribe(
      (data) => {
        this.listUser = data.body;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  blockUser(userId: number): void {
    console.log('block user  >>>> userId = ' + userId);
    this.userService.blockUser(userId).subscribe(
      (data) => {
        console.log(data);
        this.currentUser.status = data.body.status;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  unblockUser(userId: number): void {
    console.log('unblock user  >>>> userId = ' + userId);
    this.userService.unblockUser(userId).subscribe(
      (data) => {
        console.log(data);
        this.currentUser.status = data.body.status;
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
