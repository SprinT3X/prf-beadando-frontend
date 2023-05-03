import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GuitarService {

  constructor(private http: HttpClient) { }

  // Calling backend service to retrieve all guitars
  getGuitars() {
    return this.http.get(environment.serverUrl + '/guitar',
      { withCredentials: true }
    )
  }
}
