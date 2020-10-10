import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private headers: HttpHeaders
  private url = environment.apiUrl + 'user/';

  constructor(
    private http: HttpClient,
    private AuthService: AuthService
    ){ 
      this.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `{Bearer ${this.AuthService.getToken()}`
      })
    }
  
    getUsers() {
      return this.http.get(this.url, { headers: this.headers });
    }

    getUser(data) {
      
      return this.http.get(this.url + data, { headers: this.headers });
    }

    createUser(data: Object): Observable<Object> {
      return this.http.post(this.url, data, { headers: this.headers });
    }
}

export interface Users {
  id: String;
  firstname: String;
  lastname: String;
  login: String;
  password: String;
}
