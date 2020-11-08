import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SidenavService } from '../services/sidenav.service';
import { onSideNavChange, animateText } from '../animations/animations'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [onSideNavChange, animateText]
})
export class NavbarComponent implements OnInit {

  isExpanded = false;
  authStatus: boolean;

  public sideNavState: boolean = false;
  public linkText: boolean = false;



  
  constructor(
    private authService: AuthService,
    private router: Router,
    private _sidenavService: SidenavService) { }

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





  onSinenavToggle() {
    this.sideNavState = !this.sideNavState
    
    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200)
    this._sidenavService.sideNavState$.next(this.sideNavState)
  }

}
