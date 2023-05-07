import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './utils/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'prf-beadando-frontend';

  constructor(private loginService: LoginService, private router: Router) { }

  isLoggedIn() {
    return localStorage.getItem('user') != null
  }

  goToAdmin() {
    this.router.navigate(['/admin'])
  }

  logout() {
    if (localStorage.getItem('user')) {
      localStorage.removeItem('user')
      this.loginService.logout().subscribe({
        next: msg => {
          console.log(msg)
          this.router.navigate(['/login'])
        },
        error: err => console.log(err)
      })
    }
  }
}
