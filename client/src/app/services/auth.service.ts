import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private isAuth: BehaviorSubject<boolean>;
  private token

  constructor() {
    this.isAuth = new BehaviorSubject<boolean>(false);
  }

  signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.set(true)
            resolve(true);
          }, 2000
        );
      }
    );
  }

  signOut() {
    this.set(false)
  }

  get(): Observable<boolean> {
    return this.isAuth.asObservable();
  }

  set(newValue): void {
    this.isAuth.next(newValue);
  }
}