import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // Calling backend service to retrieve all users
  getUsers() {
    return this.http.get(environment.serverUrl + '/user',
      { withCredentials: true }
    )
  }
  
  // Calling backend service to delete user
  deleteUser(username: string) {
    return this.http.delete(environment.serverUrl + '/user',
     { withCredentials: true, body: {username: username}, responseType: "text"  }
    )
  }
}
