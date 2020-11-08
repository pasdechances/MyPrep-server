import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class InstallService {

  private isInstalled: BehaviorSubject<String>;
  private url = environment.apiUrl + 'install/';

  constructor(private http: HttpClient) {
    this.checkInstall()
    this.isInstalled = new BehaviorSubject<String>('');
  }

  checkInstall() {
    return new Promise(
      (resolve, reject) => {
        this.http.get(this.url).subscribe((responseBody : String) => { 
          this.set(responseBody)
        },
        (error) => {
          this.set('Unreachable')
        }); 
      }
    );
  }

  get(): Observable<String> {
    return this.isInstalled.asObservable();
  }

  set(newValue): void {
    this.isInstalled.next(newValue);
  }

}