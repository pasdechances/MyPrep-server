import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private profile = new profile;
  url = environment.apiUrl + 'auth/';

  constructor(private http: HttpClient) {
    this.profile.isAuth = new BehaviorSubject<boolean>(false);
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
        this.http.delete(this.url + this.profile.userId).subscribe((responseBody) => { 
          this.destroy()
          resolve(responseBody)
        });
      }
    );
  }

  get(): Observable<boolean> {
    return this.profile.isAuth.asObservable();
  }

  getToken() {
    return this.profile.token;
  }

  set(newValue): void {
    this.profile.token = newValue.token
    this.profile.userId = newValue.userId
    this.profile.isAuth.next(true)
  }

  destroy(): void {
    this.profile.token = ''
    this.profile.userId = ''
    this.profile.isAuth.next(false)
  }
}

export class profile {
  token: String;
  userId: String;
  isAuth: BehaviorSubject<boolean>;
}