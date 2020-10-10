import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }


  onSignIn(event) {
    var data = new Login()
    data.username = event.target.login.value
    data.password = event.target.password.value
    
    this.authService.signIn(data)
    .then(
      () => {
        console.log('Sign in successful!');
        this.router.navigate(['/']);
      }
    )
    .catch(
      () => {
        console.log('Sign in successful!');
        this.router.navigate(['/auth']);
      }
    )
  }
}

export class Login {
  username: String;
  password: String;
}

