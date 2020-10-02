import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  user = []

  constructor(private http: HttpClient) { }

    url = '/api/user/';
  
    getUsers() {
      return this.http.get(this.url);
    }

    getUser(data) {
      return this.http.get(this.url + data);
    }

    createUser(data: Object): Observable<Object> {
      return this.http.post(this.url, data);
    }
}

export interface Users {
  id: String;
  firstname: String;
  lastname: String;
  login: String;
  password: String;
}
