import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { InstallService } from './install.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstallGuard implements CanActivate {

  constructor(private install: InstallService,
              private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log('install guard')
      this.install.get().subscribe((value)=> {
        if(!value){
          this.router.navigate(['/install']);
        }
      })
      return true;
  }
}

@Injectable({
  providedIn: 'root'
})
export class InstalledGuard implements CanActivate {

  constructor(private install: InstallService,
              private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log('installed guard')
      this.install.get().subscribe((value)=> {
        if(value){
          this.router.navigate(['/auth']);
        }
      })
      return true;
  }
}