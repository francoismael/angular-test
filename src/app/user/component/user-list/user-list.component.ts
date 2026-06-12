import { Component } from '@angular/core';
import { User } from '../../models/user.models';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  user: User[] = [];
  constructor (private readonly userService: UserService, private readonly router: Router){}

  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers(): void {
    this.userService.getUsers().subscribe({
      next: (response: User[]) => {
        this.user = response;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
