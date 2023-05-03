import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  // Calling backend service to login
  login(username: string, password: string) {
    return this.http.post(environment.serverUrl + '/session',
      { username: username, password: password },
      { withCredentials: true, responseType: "text" }
    )
  }

  // Calling backend service for logged in user's data
  status() {
    return this.http.get(environment.serverUrl + '/session',
      { withCredentials: true, responseType: "text" }
    )
  }

  // Calling backend service to logout
  logout() {
    return this.http.delete(environment.serverUrl + '/session',
      { withCredentials: true, responseType: "text" }
    )
  }
}
