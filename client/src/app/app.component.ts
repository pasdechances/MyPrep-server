import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  
  authStatus: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.get().subscribe((value) => {
      this.authStatus = value;
    });
  }
}
