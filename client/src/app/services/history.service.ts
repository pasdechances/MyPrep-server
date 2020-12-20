import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HistoryService {

  private headers: HttpHeaders
  private url = environment.apiUrl + 'history/';

  constructor(
    private http: HttpClient,
    private AuthService: AuthService
    ){ 
      this.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `{Bearer ${this.AuthService.getToken()}`
      })
    }
  
    getHistories() {
      return this.http.get(this.url, { headers: this.headers });
    }

    getHistoryByUser(data) {
      
      return this.http.get(this.url + data, { headers: this.headers });
    }

}

export interface History {
  date: string;
  userId: string;
  event: string;
  info: string;
  ip: string;
}





