import { Component, Renderer2 } from '@angular/core';
import { AuthService } from './services/auth.service';
import { SidenavService } from './services/sidenav.service';
import { onMainContentChange, onPreUse } from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ 
    onMainContentChange,
    onPreUse
  ]
})

export class AppComponent {
  
  public authStatus: boolean;
  public onSideNavChange: boolean;

  constructor(
      private authService: AuthService,
      private _sidenavService: SidenavService,
      private renderer: Renderer2) {
    this._sidenavService.sideNavState$.subscribe( res => {
      console.log(res)
      this.onSideNavChange = res;
    })
  }

  ngOnInit(): void {
    this.authService.get().subscribe((value) => {
      this.authStatus = value;
    });
  }

  ngAfterViewInit() {
    let loader = this.renderer.selectRootElement('#loader');
    this.renderer.setStyle(loader, 'display', 'none');
  }
}
