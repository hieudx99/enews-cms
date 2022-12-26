import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private storageService: StorageService,
    private userService: UserService
  ) {}
  user!: User;
  ngOnInit(): void {
    let userId = this.storageService.getUserId();
    this.userService.findById(userId).subscribe((data) => {
      this.user = data.body;
    });
  }
}
