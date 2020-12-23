import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { SidenavService } from './services/sidenav.service';
import { ListGroupsComponent } from './components/list-groups/list-groups.component';
import { ListPatientsComponent } from './components/list-patients/list-patients.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { FormProductsComponent } from './components/form-products/form-products.component';
import { FormPatientsComponent } from './components/form-patients/form-patients.component';
import { FormGroupsComponent } from './components/form-groups/form-groups.component';
import { FormMedicsComponent } from './components/form-medics/form-medics.component';
import { ListMedicsComponent } from './components/list-medics/list-medics.component';
import { DatepickerYearfirstComponent } from './components/datepicker/datepicker-yearfirst/datepicker-yearfirst.component';
import { DatepickerMonthyearComponent } from './components/datepicker/datepicker-monthyear/datepicker-monthyear.component';
import { DatepickerClassicComponent } from './components/datepicker/datepicker-classic/datepicker-classic.component';
import { FormLaboComponent } from './components/form-labo/form-labo.component'



@NgModule({
  declarations: [
    AppComponent,
    FormUserComponent,
    NavbarComponent,
    ListUserComponent,
    AuthComponent,
    AdminComponent,
    NotFoundComponent,
    InstallComponent,
    SearchComponent,
    ListGroupsComponent,
    ListPatientsComponent,
    ListProductsComponent,
    FormProductsComponent,
    FormPatientsComponent,
    FormGroupsComponent,
    FormMedicsComponent,
    ListMedicsComponent,
    DatepickerYearfirstComponent,
    DatepickerMonthyearComponent,
    DatepickerClassicComponent,
    FormLaboComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  exports:[],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
