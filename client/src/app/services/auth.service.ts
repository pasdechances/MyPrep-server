import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private user = new profile;
  url = environment.apiUrl + 'auth/';

  constructor(private http: HttpClient) {
    this.user.isAuth = new BehaviorSubject<boolean>(false);
  }

  signIn(data) {
    return new Promise(
      (resolve, reject) => {
        
        this.http.post(this.url, data).subscribe((responseBody) => { 
          this.set(responseBody)
          resolve(true)
        },
        (error) =>{
          reject(error.error.error)
          console.log(error.error.error)
        });
      
          
      }
    );
  }

  signOut() {
    return new Promise(
      (resolve, reject) => {
        this.http.delete(this.url).subscribe((responseBody) => { 
          this.destroy()
          resolve(responseBody)
        });
      }
    );
  }

  get(): Observable<boolean> {
    return this.user.isAuth.asObservable();
  }

  getToken() {
    return this.user.token;
  }

  set(newValue): void {
    this.user.token = newValue.token
    this.user.userId = newValue.userId
    this.user.isAuth.next(true)
  }

  destroy(): void {
    this.user.token = ''
    this.user.userId = ''
    this.user.isAuth.next(false)
  }
}

export class profile {
  token: String;
  userId: String;
  isAuth: BehaviorSubject<boolean>;
}