import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  bkUrl = {};

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.bkUrl = this.getBackgroundImageUrl();
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
        console.log('auth failed');
        this.router.navigate(['/auth']);
      }
    )
  }

  getBackgroundImageUrl() { 
    const styles = {
      'background-image': 'url(https://pharmacieabbi.pharminfo.fr/static/clients/1651/images/visual/devanture.JPG)'
    };
    console.log(styles);
    return styles;
  }


}

export class Login {
  username: String;
  password: String;
}

