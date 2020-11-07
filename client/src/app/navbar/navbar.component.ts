import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isExpanded = false;
  authStatus: boolean;
  
  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
    this.authService.get().subscribe((value) => {
      this.authStatus = value;
      if (!this.authStatus){
        this.router.navigate(['/auth']);
      }
    });
  }

  onSignOut() {
    this.authService.signOut();
  }

}
