import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private isAuth: BehaviorSubject<boolean>;
  url = environment.apiUrl + 'auth/';
  private token

  constructor(private http: HttpClient) {
    this.isAuth = new BehaviorSubject<boolean>(false);
  }

  signIn(data) {
    console.log(data)
    return new Promise(
      (resolve, reject) => {
        this.http.post(this.url, data).subscribe((responseBody) => { 
          this.set(responseBody)
          resolve(responseBody)
        });
      }
    );
  }

  signOut() {
    return new Promise(
      (resolve, reject) => {
        this.http.delete(this.url).subscribe((responseBody) => { 
          if(responseBody){
            this.set(false)
          }  
          resolve(responseBody)
        });
      }
    );
  }

  get(): Observable<boolean> {
    return this.isAuth.asObservable();
  }

  set(newValue): void {
    this.isAuth.next(newValue);
  }
}