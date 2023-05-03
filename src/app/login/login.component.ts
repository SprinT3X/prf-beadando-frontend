import { Component, OnInit } from '@angular/core';
import { LoginService } from '../utils/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username: string
  password: string

  constructor(private loginService: LoginService, private router: Router) {
    this.username = ''
    this.password = ''
  }

  login() {
    if (this.username != '' && this.password != '') {
      this.loginService.login(this.username, this.password).subscribe({
        next: msg => {
          console.log(msg)
          localStorage.setItem('user', this.username)
          this.router.navigate(['/'])
        },
        error: err => console.log(err)
      })
    }
  }

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      localStorage.removeItem('user')
      this.loginService.logout().subscribe({
        next: msg => console.log(msg),
        error: err => console.log(err)
      })
    }
  }
}
