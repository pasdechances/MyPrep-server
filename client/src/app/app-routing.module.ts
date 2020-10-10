import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InstallComponent } from './install/install.component';
import { AuthGuard } from './services/auth-guard.service';
import { InstallGuard, InstalledGuard } from './services/install-guard.service';


const routes: Routes = [
  { path: 'admin', canActivate: [AuthGuard], component: AdminComponent },
  { path: 'auth', canActivate: [InstallGuard], component: AuthComponent },
  { path: '', canActivate: [AuthGuard], component: MenuComponent },
  { path: 'install', canActivate: [InstalledGuard], component: InstallComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
