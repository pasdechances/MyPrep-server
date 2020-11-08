import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormUserComponent } from './components/form-user/form-user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InstallComponent } from './install/install.component';
import { SearchComponent } from './search/search.component';
import { SidenavService } from './services/sidenav.service'


@NgModule({
  declarations: [
    AppComponent,
    FormUserComponent,
    NavbarComponent,
    ListUserComponent,
    AuthComponent,
    MenuComponent,
    AdminComponent,
    NotFoundComponent,
    InstallComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  exports:[],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
