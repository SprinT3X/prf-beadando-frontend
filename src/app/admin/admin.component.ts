import { Component, OnInit } from '@angular/core';
import { UserService } from '../utils/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users: User[] = []

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    this.userService.getUsers().subscribe({
      next: msg => {
        this.users = Object.values(msg)
      },
      error: err => console.log(err)
    })
  }

  deleteUser(user: any) {
    this.userService.deleteUser(user.username).subscribe(
      data => {
        // remove the deleted user from the users array
        const index = this.users.indexOf(user);
        this.users.splice(index, 1);
        this.getUsers()
      },
      error => console.log(error)
    );
  }
}


interface User {
  _id: string;
  username: string;
  password: string;
  email: string;
  role: string;
  created_at: string;
  updated_at: string;
  last_password_changed_date: string;
  __v: number;
}