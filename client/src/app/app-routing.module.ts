import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InstallComponent } from './install/install.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: MenuComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'install', component: InstallComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
